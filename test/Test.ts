import assert from "assert";
import { 
  TestHelpers,
  StakedMonad_Approval
} from "generated";
const { MockDb, StakedMonad } = TestHelpers;

describe("StakedMonad contract Approval event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for StakedMonad contract Approval event
  const event = StakedMonad.Approval.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("StakedMonad_Approval is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await StakedMonad.Approval.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualStakedMonadApproval = mockDbUpdated.entities.StakedMonad_Approval.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedStakedMonadApproval: StakedMonad_Approval = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      owner: event.params.owner,
      spender: event.params.spender,
      value: event.params.value,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualStakedMonadApproval, expectedStakedMonadApproval, "Actual StakedMonadApproval should be the same as the expectedStakedMonadApproval");
  });
});
