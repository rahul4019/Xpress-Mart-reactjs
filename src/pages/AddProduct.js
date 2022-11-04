import React from 'react';

export default function AddProduct() {
  return (
    <div class="container mt-4 col-md-4 border p-2 rounded bg-light">
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Name
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          ></input>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Description
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
          ></input>
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Price
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
          ></input>
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Rating
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
          ></input>
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Image URL
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
          ></input>
        </div>

        <div className="d-flex justify-content-center">
          <button
            type="submit"
            class="btn btn-primary "
            style={{ width: '50%' }}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
