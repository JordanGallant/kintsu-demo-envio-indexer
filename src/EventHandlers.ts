/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  StakedMonad,
  StakedMonad_Approval,
  StakedMonad_Compounded,
  StakedMonad_EIP712DomainChanged,
  StakedMonad_FeesAdjusted,
  StakedMonad_FeesWithdrawn,
  StakedMonad_NodeAdded,
  StakedMonad_NodeRemoved,
  StakedMonad_NodeUpdated,
  StakedMonad_RoleAdminChanged,
  StakedMonad_RoleGranted,
  StakedMonad_RoleRevoked,
  StakedMonad_Staked,
  StakedMonad_Transfer,
  StakedMonad_UnlockCancelled,
  StakedMonad_UnlockRedeemed,
  StakedMonad_UnlockRequested,
  StakedMonad_UnlockSent,
} from "generated";

StakedMonad.Approval.handler(async ({ event, context }) => {
  const entity: StakedMonad_Approval = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    spender: event.params.spender,
    value: event.params.value,
  };

  context.StakedMonad_Approval.set(entity);
});
//
StakedMonad.Compounded.handler(async ({ event, context }) => {
  const entity: StakedMonad_Compounded = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    amount: event.params.amount,
  };

  context.StakedMonad_Compounded.set(entity);
});

StakedMonad.EIP712DomainChanged.handler(async ({ event, context }) => {
  const entity: StakedMonad_EIP712DomainChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
  };

  context.StakedMonad_EIP712DomainChanged.set(entity);
});

StakedMonad.FeesAdjusted.handler(async ({ event, context }) => {
  const entity: StakedMonad_FeesAdjusted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    newFee: event.params.newFee,
  };

  context.StakedMonad_FeesAdjusted.set(entity);
});

StakedMonad.FeesWithdrawn.handler(async ({ event, context }) => {
  const entity: StakedMonad_FeesWithdrawn = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    shares: event.params.shares,
  };

  context.StakedMonad_FeesWithdrawn.set(entity);
});

StakedMonad.NodeAdded.handler(async ({ event, context }) => {
  const entity: StakedMonad_NodeAdded = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    nodeId: event.params.nodeId,
    index: event.params.index,
  };

  context.StakedMonad_NodeAdded.set(entity);
});

StakedMonad.NodeRemoved.handler(async ({ event, context }) => {
  const entity: StakedMonad_NodeRemoved = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    nodeId: event.params.nodeId,
  };

  context.StakedMonad_NodeRemoved.set(entity);
});

StakedMonad.NodeUpdated.handler(async ({ event, context }) => {
  const entity: StakedMonad_NodeUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    nodeId: event.params.nodeId,
    oldWeight: event.params.oldWeight,
    newWeight: event.params.newWeight,
  };

  context.StakedMonad_NodeUpdated.set(entity);
});

StakedMonad.RoleAdminChanged.handler(async ({ event, context }) => {
  const entity: StakedMonad_RoleAdminChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    role: event.params.role,
    previousAdminRole: event.params.previousAdminRole,
    newAdminRole: event.params.newAdminRole,
  };

  context.StakedMonad_RoleAdminChanged.set(entity);
});

StakedMonad.RoleGranted.handler(async ({ event, context }) => {
  const entity: StakedMonad_RoleGranted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    role: event.params.role,
    account: event.params.account,
    sender: event.params.sender,
  };

  context.StakedMonad_RoleGranted.set(entity);
});

StakedMonad.RoleRevoked.handler(async ({ event, context }) => {
  const entity: StakedMonad_RoleRevoked = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    role: event.params.role,
    account: event.params.account,
    sender: event.params.sender,
  };

  context.StakedMonad_RoleRevoked.set(entity);
});

StakedMonad.Staked.handler(async ({ event, context }) => {
  const entity: StakedMonad_Staked = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    staker: event.params.staker,
    amount: event.params.amount,
    newShares: event.params.newShares,
  };

  context.StakedMonad_Staked.set(entity);
});

StakedMonad.Transfer.handler(async ({ event, context }) => {
  const entity: StakedMonad_Transfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    value: event.params.value,
  };

  context.StakedMonad_Transfer.set(entity);
});

StakedMonad.UnlockCancelled.handler(async ({ event, context }) => {
  const entity: StakedMonad_UnlockCancelled = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    staker: event.params.staker,
    unlockId: event.params.unlockId,
  };

  context.StakedMonad_UnlockCancelled.set(entity);
});

StakedMonad.UnlockRedeemed.handler(async ({ event, context }) => {
  const entity: StakedMonad_UnlockRedeemed = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    staker: event.params.staker,
    unlockId: event.params.unlockId,
    amount: event.params.amount,
  };

  context.StakedMonad_UnlockRedeemed.set(entity);
});

StakedMonad.UnlockRequested.handler(async ({ event, context }) => {
  const entity: StakedMonad_UnlockRequested = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    staker: event.params.staker,
    unlockId: event.params.unlockId,
    shares: event.params.shares,
  };

  context.StakedMonad_UnlockRequested.set(entity);
});

StakedMonad.UnlockSent.handler(async ({ event, context }) => {
  const entity: StakedMonad_UnlockSent = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    batchId: event.params.batchId,
    shares: event.params.shares,
    spotValue: event.params.spotValue,
  };

  context.StakedMonad_UnlockSent.set(entity);
});
