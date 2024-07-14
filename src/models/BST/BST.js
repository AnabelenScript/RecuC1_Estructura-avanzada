import Node from "./Node.js";

class BST {
  constructor() {
    this.root = null;
  }

  add(product) {
    const newNode = new Node(product);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.product.name < node.product.name) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  inOrder(callback) {
    this.inOrderTraverse(this.root, callback);
  }

  inOrderTraverse(node, callback) {
    if (node !== null) {
      this.inOrderTraverse(node.left, callback);
      callback(node.product);
      this.inOrderTraverse(node.right, callback);
    }
  }

  searchCategory(category, callback) {
    this.searchCategoryTraverse(this.root, category, callback);
  }

  searchCategoryTraverse(node, category, callback) {
    if (node !== null) {
      this.searchCategoryTraverse(node.left, category, callback);
      if (node.product.category === category) {
        callback(node.product);
      }
      this.searchCategoryTraverse(node.right, category, callback);
    }
  }

  searchByName(name) {
    return this.searchByNameTraverse(this.root, name);
  }

  searchByNameTraverse(node, name) {
    if (node !== null) {
      if (node.product.name === name) {
        alert(
          `El producto "${name}" se encuentra en la categoría "${node.product.category}"`
        );
        return node.product;
      }
      if (name < node.product.name) {
        return this.searchByNameTraverse(node.left, name);
      } else {
        return this.searchByNameTraverse(node.right, name);
      }
    } else {
      alert(`El producto "${name}" no existe.`);
      return null;
    }
  }

  max() {
    return this.maxNode(this.root);
  }

  maxNode(node) {
    if (node === null || node.right === null) {
      return node;
    } else {
      return this.maxNode(node.right);
    }
  }

  min() {
    return this.minNode(this.root);
  }

  minNode(node) {
    if (node === null || node.left === null) {
      return node;
    } else {
      return this.minNode(node.left);
    }
  }
}

export default BST;
