import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPuzzlePieceTwoMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5 9.688c0-.344.094-.657.281-.876.157-.25.407-.437.719-.437.313 0 .563.188.719.438.062.062.125.093.156.093A.134.134 0 0 0 7 8.781v-.906c0-.437.344-.781.75-.781h1.375a.134.134 0 0 0 .125-.125c0-.032-.031-.094-.094-.157-.25-.187-.406-.437-.406-.75 0-.312.156-.562.406-.75.219-.187.531-.28.844-.28s.625.093.844.28c.25.188.406.438.406.75 0 .313-.156.563-.406.75-.063.063-.094.125-.094.157 0 .062.063.125.125.125h1.344c.437 0 .75.343.75.781v5.281c0 .094 0 0 .031.188V14.5q0 .094.094.094c.031 0 .094 0 .156-.094.188-.219.438-.406.75-.406.281 0 .531.187.719.406.156.25.281.563.281.875 0 .344-.125.688-.281.906-.188.25-.438.407-.719.407-.312 0-.562-.157-.75-.407-.062-.093-.125-.125-.156-.125-.063 0-.094.063-.094.125v1.969a.74.74 0 0 1-.75.75h-1.375a.61.61 0 0 1-.625-.625c0-.25.156-.437.313-.562a.43.43 0 0 0 .187-.344.43.43 0 0 0-.187-.344 1 1 0 0 0-.563-.187c-.219 0-.437.093-.562.187a.43.43 0 0 0-.188.344c0 .125.063.25.188.343.156.125.312.313.312.563a.61.61 0 0 1-.625.625H7.75a.72.72 0 0 1-.75-.75v-7.656a.134.134 0 0 0-.125-.125c-.031 0-.094.031-.156.094a.83.83 0 0 1-.719.406.83.83 0 0 1-.719-.406C5.094 10.343 5 10.03 5 9.687m3.875 2.53v.032a.9.9 0 0 1-.125-.5c0-.312.156-.562.406-.75.219-.156.531-.281.844-.281s.625.125.844.281c.094.094.187.188.25.281.094.156.156.313.156.469 0 .344-.156.594-.406.781-.063.063-.094.125-.094.156 0 .032 0 .063.031.063.031.031.063.031.094.031h1.344c.156 0 .25-.094.25-.25V7.875c0-.125-.094-.281-.25-.281h-1.344a.61.61 0 0 1-.625-.625c0-.25.156-.438.313-.563a.43.43 0 0 0 .187-.343.43.43 0 0 0-.187-.344A1 1 0 0 0 10 5.53c-.219 0-.437.094-.562.188a.43.43 0 0 0-.188.343c0 .125.063.25.188.344.156.125.312.313.312.563a.61.61 0 0 1-.625.625H7.75c-.125 0-.25.156-.25.281v.906a.61.61 0 0 1-.625.625.61.61 0 0 1-.531-.281c-.125-.156-.219-.219-.344-.219s-.219.063-.344.219c-.093.125-.156.313-.156.563s.063.437.156.562c.125.156.219.219.344.219s.219-.063.344-.219a.63.63 0 0 1 .531-.312c.344 0 .625.28.625.656v1.937c0 .156.125.25.25.25h1.375c.063 0 .125-.031.125-.094 0-.03-.031-.062-.031-.093-.031-.031-.031-.063-.063-.063a.9.9 0 0 1-.281-.312m.875.47a.627.627 0 0 1-.625.624H7.719a.27.27 0 0 0-.25.25v4.657c0 .156.125.281.25.281h1.406a.134.134 0 0 0 .125-.125c0-.031-.031-.094-.094-.156-.25-.188-.406-.438-.406-.75 0-.313.156-.594.406-.75.219-.188.531-.313.844-.313s.625.125.844.313c.25.156.406.437.406.75 0 .312-.156.562-.406.75-.063.062-.094.125-.094.156 0 .063.063.125.125.125h1.344c.125 0 .25-.125.25-.281V16.28c0-.343.281-.625.625-.625a.63.63 0 0 1 .531.313c.125.156.219.187.344.187s.219-.031.344-.187c.093-.125.156-.344.156-.594 0-.219-.063-.437-.156-.562-.126-.126-.22-.22-.344-.22-.125 0-.219.063-.344.22a.63.63 0 0 1-.531.312.627.627 0 0 1-.625-.625v-.937a.27.27 0 0 0-.25-.25h-1.344a.64.64 0 0 1-.469-.188.75.75 0 0 1-.156-.437c0-.282.156-.47.313-.594a.43.43 0 0 0 .187-.344.44.44 0 0 0-.062-.187c-.032-.032-.063-.094-.126-.157-.124-.094-.343-.156-.562-.156s-.437.063-.562.156c-.126.125-.188.25-.188.344s0 .156.063.219c.03.031.062.094.124.125.063.062.157.125.188.219.094.093.125.218.125.374' />
    </g>
    <defs>
      <clipPath id='972870ea050baa2913d31e4d7e75c680__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPuzzlePieceTwoMdRegularIcon);
export default ForwardRef;
