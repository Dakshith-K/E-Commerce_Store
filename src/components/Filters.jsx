import { Form, useLoaderData, Link } from 'react-router-dom';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import FormRange from './FormRange';
import FormCheckbox from './FormCheckbox';

const Filters = () => {
  const { meta, params } = useLoaderData()
  const { search, company, category, shipping, order, price } = params;

  return (
    <Form className='bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>

      <FormInput type='search' label='search product' name='search' size='input-sm' defaultValue={search} />

      <FormSelect label='select category' name='category' list={meta.categories} size='select-sm' defaultValue={category} />

      <FormSelect label='select company' name='company' list={meta.companies} size='select-sm' defaultValue={company} />

      <FormSelect label='sort by' name='order' list={['A-Z', 'Z-A', 'Price: High to Low', 'Price: Low to High']} size='select-sm' defaultValue={order} />

      <FormRange name='price' label='select price' size='range-sm' price={price} />

      <FormCheckbox label='free shipping' name='shipping' size='checkbox-sm' defaultValue={shipping} />

      <button className="btn btn-primary btn-sm">
        Search
      </button>
      <Link to='/products' className='btn btn-accent btn-sm'>
        Reset
      </Link>
    </Form>
  )
}

export default Filters