import {
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  TokenMetadataURIUpdated as TokenMetadataURIUpdatedEvent,
  TokenURIUpdated as TokenURIUpdatedEvent,
  Transfer as TransferEvent
} from "../generated/Token/Token"
import {
  Approval,
  ApprovalForAll,
  TokenMetadataURIUpdated,
  TokenURIUpdated,
  Transfer
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.approved = event.params.approved
  entity.tokenId = event.params.tokenId
  entity.save()
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.operator = event.params.operator
  entity.approved = event.params.approved
  entity.save()
}

export function handleTokenMetadataURIUpdated(
  event: TokenMetadataURIUpdatedEvent
): void {
  let entity = new TokenMetadataURIUpdated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._tokenId = event.params._tokenId
  entity.owner = event.params.owner
  entity._uri = event.params._uri
  entity.save()
}

export function handleTokenURIUpdated(event: TokenURIUpdatedEvent): void {
  let entity = new TokenURIUpdated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._tokenId = event.params._tokenId
  entity.owner = event.params.owner
  entity._uri = event.params._uri
  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.tokenId = event.params.tokenId
  entity.save()
}
