import React from 'react';

export default function AddProduct() {
  return (
    <div class="container mt-4 col-md-4 border p-3 rounded  shadow-lg">
      <form>
        <div class="mb-3">
          <label for="name" class="form-label">
            Name
          </label>
          <input type="text" class="form-control" id="name"></input>
        </div>
        <div class="mb-3">
          <label for="description" class="form-label">
            Description
          </label>
          <input type="text" class="form-control" id="description" required></input>
        </div>

        <div class="mb-3">
          <label for="price" class="form-label">
            Price
          </label>
          <input type="text" class="form-control" id="price" required></input>
        </div>

        <div class="mb-3">
          <label for="rating" class="form-label" required>
            Rating
          </label>
          <input type="text" class="form-control" id="rating" required></input>
        </div>

        <div class="mb-3">
          <label for="img" class="form-label">
            Image URL
          </label>
          <input type="url" class="form-control" id="img" required></input>
        </div>

        <div className="d-flex justify-content-center">
          <button
            type="submit"
            class="btn btn-success "
            style={{ width: '50%' }}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
