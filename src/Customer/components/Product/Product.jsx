
'use client'

import { useEffect, useRef, useState } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import SectionCarouselData from '../HomeCarousel/SectionCarouselData'
import ProductCard from './ProductCard'
import { useLocation, useNavigate } from 'react-router-dom'
import Pagination from '../Pagination/Pagination'


const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]
const subCategories = [
  { name: 'Totes', href: '#' },
  { name: 'Backpacks', href: '#' },
  { name: 'Travel Bags', href: '#' },
  { name: 'Hip Bags', href: '#' },
  { name: 'Laptop Sleeves', href: '#' },
]
const filters = [
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'White', label: 'White', checked: false },
      { value: 'Beige', label: 'Beige', checked: false },
      { value: 'Blue', label: 'Blue', checked: true },
      { value: 'Brown', label: 'Brown', checked: false },
      { value: 'Green', label: 'Green', checked: false },
      { value: 'Purple', label: 'Purple', checked: false },
    ],
  },
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'new-arrivals', label: 'New Arrivals', checked: false },
      { value: 'sale', label: 'Sale', checked: false },
      { value: 'travel', label: 'Travel', checked: false },
      { value: 'organization', label: 'Organization', checked: false },
      { value: 'accessories', label: 'Accessories', checked: false },
    ],
  },
  {
    id: 'size',
    name: 'Size',
    options: [
      { value: 'sm', label: 'SM', checked: false },
      { value: 'md', label: 'MD', checked: false },
      { value: 'lg', label: 'L', checked: false },
      { value: 'xl', label: 'XL', checked: false },
      { value: 'xxl', label: 'XXL', checked: false },
      { value: 'xxl', label: 'XXXL', checked: false },
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



export default function Product() {
  const location =useLocation(); 
  const navigate=useNavigate();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  let searchParams = new URLSearchParams(location.search);
//  console.log(searchParams.getAll(filter))
  const handleFilter = (section, option) => {
    let filterValues = searchParams.get(section)?.split(',') || [];
    if (filterValues.includes(option.value)) {
      filterValues = filterValues.filter(value => value !== option.value);
    } else{
       filterValues.push(option.value);
    }

    if (filterValues.length > 0) {
      searchParams.set(section, filterValues.join(','));
    } else {
      searchParams.delete(section);
    }

    navigate({ search: searchParams.toString() });
  }; 
  const filteredProduct= SectionCarouselData.filter(product =>
    filters.every(filter => console.log(searchParams.get(filter.id)?.split(',').includes(product[filter.id]))))
    console.log(filteredProduct)
      //!searchParams.get(filter.id) ||
      //searchParams.get(filter.id).split(',').includes(product[filter.id])
    //)
  //)

  const [updatedFilters,setUpdatedFilters]=useState(filters);
  const firstChildRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const [totalProducts,setTotalProducts]=useState(SectionCarouselData.length)
  useEffect(() => {
    const updateFilters=filters?.map(filter => {
      const options=filter.options.map(option => {
       const isSelected = searchParams.get(filter.id)?.split(',').includes(option.value) || false;
       console.log(isSelected)
        return { ...option, checked: isSelected };
      });
      return { ...filter, options };
    });
    console.log(updateFilters)
    console.log(filters)
   setUpdatedFilters(updateFilters);
   if (firstChildRef.current) {
    firstChildRef.current.focusInput();
  }
  console.log(firstChildRef.current)
  setTotalProducts(SectionCarouselData.filter(product =>
    updatedFilters.every(filter =>
      !searchParams.get(filter.id) ||
      searchParams.get(filter.id).split(',').includes(product[filter.id])
    )
).length) 
  },[location,currentPage])


  
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
 
        <Dialog open={mobileFiltersOpen} onClose={setMobileFiltersOpen} className="relative z-40 lg:hidden">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 z-40 flex">
            <DialogPanel
              transition
              className="relative ml-auto flex h-full w-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
            >
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>

              {/* Filters */}
              <form className="mt-4 border-t border-gray-200">
                <h3 className="sr-only">Categories</h3>
                <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <a href={category.href} className="block px-2 py-3">
                        {category.name}
                      </a>
                    </li>
                  ))}
                </ul>

                {filters.map((section) => (
                  <Disclosure key={section.id} as="div" className="border-t border-gray-200 px-4 py-6">
                    <h3 className="-mx-2 -my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">{section.name}</span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon aria-hidden="true" className="h-5 w-5 group-data-[open]:hidden" />
                          <MinusIcon aria-hidden="true" className="h-5 w-5 [.group:not([data-open])_&]:hidden" />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-6">
                      {  
                        section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              defaultValue={option.value}
                              defaultChecked={option.checked}
                              id={`filter-mobile-${section.id}-${optionIdx}`}
                              name={`${section.id}[]`}
                              type="checkbox"
                              onClick={()=>handleFilter()}
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                              className="ml-3 min-w-0 flex-1 text-gray-500"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </form>
            </DialogPanel>
          </div>
        </Dialog>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">New Arrivals</h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                  </MenuButton>
                </div>

                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <MenuItem key={option.name}>
                        <a
                          href={option.href}
                          className={classNames(
                            option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                            'block px-4 py-2 text-sm data-[focus]:bg-gray-100',
                          )}
                        >
                          {option.name}
                        </a>
                      </MenuItem>
                    ))}
                  </div>
                </MenuItems>
              </Menu>

              <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                <span className="sr-only">View grid</span>
                <Squares2X2Icon aria-hidden="true" className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              <div><h1 className='opacity-50 font-bold mt-[-0.5rem] mb-[1rem] '>Filters</h1>  
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>
                <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <a href={category.href}>{category.name}</a>
                    </li>
                  ))}
                </ul>

                {updatedFilters.map((section) => (
                  <Disclosure key={section.id} as="div" className="border-b border-gray-200 py-6">
                    <h3 className="-my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">{section.name}</span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon aria-hidden="true" className="h-5 w-5 group-data-[open]:hidden" />
                          <MinusIcon aria-hidden="true" className="h-5 w-5 [.group:not([data-open])_&]:hidden" />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-4">
                        {section.options?.map((option, optionIdx) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              defaultValue={option.value}
                              defaultChecked={new URLSearchParams(location.search).get(section.id)?.includes(option.value)}
                              id={`filter-${section.id}-${optionIdx}`}
                              name={`${section.id}[]`}
                              onChange={()=>handleFilter(section.id,option)}
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label htmlFor={`filter-${section.id}-${optionIdx}`} className="ml-3 text-sm text-gray-600">
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </form>
</div>
              {/* Product grid */}
              <div className="lg:col-span-3 flex flex-wrap">{SectionCarouselData.filter(product =>
      updatedFilters.every(filter =>
        !searchParams.get(filter.id) ||
        searchParams.get(filter.id).split(',').includes(product[filter.id])
      )
    ).slice(indexOfFirstProduct, indexOfLastProduct).map((item,idx)=><ProductCard product={item} ref={idx === 0 ? firstChildRef : null}
    tabIndex={-1}/>)}</div>
            </div>
          </section>
        </main>
      </div>
 <Pagination
        currentPage={currentPage}
        productsPerPage={productsPerPage}
        totalPages={Math.ceil(SectionCarouselData.filter(product =>
          updatedFilters.every(filter =>
            !searchParams.get(filter.id) ||
            searchParams.get(filter.id).split(',').includes(product[filter.id])
          )
  ).length / productsPerPage)}
        totalProducts={totalProducts}
        onPageChange={handlePageChange}
      />
      </div>

  )
}