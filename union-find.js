/**
 * union-find 实现
 *  - quick-find
 *  - quick-union
 */

class UF {
  constructor(N) {
    this.id = []
    this.count = N
  }

  function UF(N) {
    for (let i = 0; i < N; i++) {
      this.id[i] = i
    }
  }

  function count() {
    return this.count
  }

  function connected(p, q) {
    return this.findQ(p) === this.findQ(q)
  }

  // quick-find *********************************
  function findQ(p) {
    return this.id[p]
  }

  function unionQ(p, q) {
    const pId = this.findQ(p)
    const qId = this.findQ(q)

    if (pId === qId) {
      return
    }

    for (let i = 0; i < this.id.length; i++) {
      if (this.id[i] === pId) {
        this.id[i] = qId
      }
    }
    
    this.count--
  }
  
  // quick-union *********************************
  function findU(p) {
    while (p !== this.id[p]) {
      p = this.id[p]
    }
    return p
  }

  function unionU(p, q) {
    const pRoot = findU(p)
    const qRoot = findU(q)
    if (pRoot === qRoot) {
      return
    }
    this.id[pRoot] = qRoot

    this.count--
  }
}

/**
 * 加权 quick-union 实现
 */

class WeightedQuickUnionUF {
  constructor(N) {
    this.id = []
    this.sz = []
    this.count = N
  }

  function UF(N) {
    for (let i = 0; i < N; i++) {
      this.id[i] = i
      this.sz[i] = 1
    }
  }

  function count() {
    return this.count
  }

  function connected(p, q) {
    return this.find(p) === this.find(q)
  }

  function find(p) {
    while (p !== this.id[p]) {
      p = this.id[p]
    }
    return p
  }

  function union(p, q) {
    const i = find(p)
    const j = find(q)
    if (i === j) {
      return
    }
    if (sz[i] < sz[j]) {
      this.id[i] = j
      sz[j] += sz[i]
    } else {
      this.id[j] = i
      sz[i] += sz[j]
    }

    this.count--
  }
}
