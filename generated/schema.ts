// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Kyber extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Kyber entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Kyber entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Kyber", id.toString(), this);
  }

  static load(id: string): Kyber | null {
    return store.get("Kyber", id) as Kyber | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get permissionlessReserveCount(): i32 {
    let value = this.get("permissionlessReserveCount");
    return value.toI32();
  }

  set permissionlessReserveCount(value: i32) {
    this.set("permissionlessReserveCount", Value.fromI32(value));
  }

  get permissionlessTotalTokenDeposited(): BigDecimal | null {
    let value = this.get("permissionlessTotalTokenDeposited");
    if (value === null) {
      return null;
    } else {
      return value.toBigDecimal();
    }
  }

  set permissionlessTotalTokenDeposited(value: BigDecimal | null) {
    if (value === null) {
      this.unset("permissionlessTotalTokenDeposited");
    } else {
      this.set(
        "permissionlessTotalTokenDeposited",
        Value.fromBigDecimal(value as BigDecimal)
      );
    }
  }

  get permissionlessTotalEtherDeposited(): BigDecimal | null {
    let value = this.get("permissionlessTotalEtherDeposited");
    if (value === null) {
      return null;
    } else {
      return value.toBigDecimal();
    }
  }

  set permissionlessTotalEtherDeposited(value: BigDecimal | null) {
    if (value === null) {
      this.unset("permissionlessTotalEtherDeposited");
    } else {
      this.set(
        "permissionlessTotalEtherDeposited",
        Value.fromBigDecimal(value as BigDecimal)
      );
    }
  }

  get permissionlessReserveTrades(): i32 {
    let value = this.get("permissionlessReserveTrades");
    return value.toI32();
  }

  set permissionlessReserveTrades(value: i32) {
    this.set("permissionlessReserveTrades", Value.fromI32(value));
  }

  get kyberTotalTrades(): i32 {
    let value = this.get("kyberTotalTrades");
    return value.toI32();
  }

  set kyberTotalTrades(value: i32) {
    this.set("kyberTotalTrades", Value.fromI32(value));
  }
}

export class tokenReserve extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save tokenReserve entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save tokenReserve entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("tokenReserve", id.toString(), this);
  }

  static load(id: string): tokenReserve | null {
    return store.get("tokenReserve", id) as tokenReserve | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenAddress(): Bytes | null {
    let value = this.get("tokenAddress");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set tokenAddress(value: Bytes | null) {
    if (value === null) {
      this.unset("tokenAddress");
    } else {
      this.set("tokenAddress", Value.fromBytes(value as Bytes));
    }
  }

  get tokenName(): string | null {
    let value = this.get("tokenName");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set tokenName(value: string | null) {
    if (value === null) {
      this.unset("tokenName");
    } else {
      this.set("tokenName", Value.fromString(value as string));
    }
  }

  get tokenSymbol(): string | null {
    let value = this.get("tokenSymbol");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set tokenSymbol(value: string | null) {
    if (value === null) {
      this.unset("tokenSymbol");
    } else {
      this.set("tokenSymbol", Value.fromString(value as string));
    }
  }

  get startTime(): i32 {
    let value = this.get("startTime");
    return value.toI32();
  }

  set startTime(value: i32) {
    this.set("startTime", Value.fromI32(value));
  }

  get totalTokenDeposited(): BigDecimal | null {
    let value = this.get("totalTokenDeposited");
    if (value === null) {
      return null;
    } else {
      return value.toBigDecimal();
    }
  }

  set totalTokenDeposited(value: BigDecimal | null) {
    if (value === null) {
      this.unset("totalTokenDeposited");
    } else {
      this.set(
        "totalTokenDeposited",
        Value.fromBigDecimal(value as BigDecimal)
      );
    }
  }

  get totalEtherDeposited(): BigDecimal | null {
    let value = this.get("totalEtherDeposited");
    if (value === null) {
      return null;
    } else {
      return value.toBigDecimal();
    }
  }

  set totalEtherDeposited(value: BigDecimal | null) {
    if (value === null) {
      this.unset("totalEtherDeposited");
    } else {
      this.set(
        "totalEtherDeposited",
        Value.fromBigDecimal(value as BigDecimal)
      );
    }
  }
}

export class orderBookReserveTrade extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id !== null,
      "Cannot save orderBookReserveTrade entity without an ID"
    );
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save orderBookReserveTrade entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("orderBookReserveTrade", id.toString(), this);
  }

  static load(id: string): orderBookReserveTrade | null {
    return store.get(
      "orderBookReserveTrade",
      id
    ) as orderBookReserveTrade | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tradeTime(): i32 {
    let value = this.get("tradeTime");
    return value.toI32();
  }

  set tradeTime(value: i32) {
    this.set("tradeTime", Value.fromI32(value));
  }

  get sourceToken(): Bytes | null {
    let value = this.get("sourceToken");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set sourceToken(value: Bytes | null) {
    if (value === null) {
      this.unset("sourceToken");
    } else {
      this.set("sourceToken", Value.fromBytes(value as Bytes));
    }
  }

  get destinationToken(): Bytes | null {
    let value = this.get("destinationToken");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set destinationToken(value: Bytes | null) {
    if (value === null) {
      this.unset("destinationToken");
    } else {
      this.set("destinationToken", Value.fromBytes(value as Bytes));
    }
  }

  get sourceAmount(): BigInt | null {
    let value = this.get("sourceAmount");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set sourceAmount(value: BigInt | null) {
    if (value === null) {
      this.unset("sourceAmount");
    } else {
      this.set("sourceAmount", Value.fromBigInt(value as BigInt));
    }
  }

  get destinationAmount(): BigInt | null {
    let value = this.get("destinationAmount");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set destinationAmount(value: BigInt | null) {
    if (value === null) {
      this.unset("destinationAmount");
    } else {
      this.set("destinationAmount", Value.fromBigInt(value as BigInt));
    }
  }
}

export class allKyberTrade extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save allKyberTrade entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save allKyberTrade entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("allKyberTrade", id.toString(), this);
  }

  static load(id: string): allKyberTrade | null {
    return store.get("allKyberTrade", id) as allKyberTrade | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tradeTime(): i32 {
    let value = this.get("tradeTime");
    return value.toI32();
  }

  set tradeTime(value: i32) {
    this.set("tradeTime", Value.fromI32(value));
  }

  get trader(): Bytes | null {
    let value = this.get("trader");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set trader(value: Bytes | null) {
    if (value === null) {
      this.unset("trader");
    } else {
      this.set("trader", Value.fromBytes(value as Bytes));
    }
  }

  get sourceToken(): Bytes | null {
    let value = this.get("sourceToken");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set sourceToken(value: Bytes | null) {
    if (value === null) {
      this.unset("sourceToken");
    } else {
      this.set("sourceToken", Value.fromBytes(value as Bytes));
    }
  }

  get destinationToken(): Bytes | null {
    let value = this.get("destinationToken");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set destinationToken(value: Bytes | null) {
    if (value === null) {
      this.unset("destinationToken");
    } else {
      this.set("destinationToken", Value.fromBytes(value as Bytes));
    }
  }

  get sourceAmount(): BigInt | null {
    let value = this.get("sourceAmount");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set sourceAmount(value: BigInt | null) {
    if (value === null) {
      this.unset("sourceAmount");
    } else {
      this.set("sourceAmount", Value.fromBigInt(value as BigInt));
    }
  }

  get destinationAmount(): BigInt | null {
    let value = this.get("destinationAmount");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set destinationAmount(value: BigInt | null) {
    if (value === null) {
      this.unset("destinationAmount");
    } else {
      this.set("destinationAmount", Value.fromBigInt(value as BigInt));
    }
  }

  get destinationAddress(): Bytes | null {
    let value = this.get("destinationAddress");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set destinationAddress(value: Bytes | null) {
    if (value === null) {
      this.unset("destinationAddress");
    } else {
      this.set("destinationAddress", Value.fromBytes(value as Bytes));
    }
  }

  get ethWeiValue(): BigInt | null {
    let value = this.get("ethWeiValue");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set ethWeiValue(value: BigInt | null) {
    if (value === null) {
      this.unset("ethWeiValue");
    } else {
      this.set("ethWeiValue", Value.fromBigInt(value as BigInt));
    }
  }
}
