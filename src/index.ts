import crypto from "crypto";

interface BlockChainModel {
  prevHash: string;
  number: number;
  data: string;
}

class Block implements BlockChainModel {
  public hash: string;
  constructor(
    public prevHash: string,
    public number: number,
    public data: string
  ) {
    this.hash = Block.calculate(prevHash, number, data);
  }
  static calculate(prevHash, number, data) {
    const toHash = `${prevHash}${number}${data}`;
    return crypto.createHash("sha256").update(toHash).digest("hex");
  }
}

class BlockChain {
  private blocks: Block[];
  constructor() {
    this.blocks = [];
  }
}
