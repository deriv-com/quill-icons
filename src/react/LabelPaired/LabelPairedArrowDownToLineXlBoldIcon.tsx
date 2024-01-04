import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowDownToLineXlBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={36}
    viewBox='0 0 18 36'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M16.875 28.5H1.125C.437 28.437.062 28.062 0 27.375c.063-.688.438-1.063 1.125-1.125h15.75c.688.063 1.063.438 1.125 1.125-.063.688-.438 1.063-1.125 1.125Zm-8.672-6.375v.047l-6-6.375c-.437-.563-.422-1.094.047-1.594.531-.437 1.063-.422 1.594.047l4.031 4.313V8.624C7.938 7.937 8.313 7.562 9 7.5c.688.063 1.063.438 1.125 1.125v9.938l4.078-4.313c.5-.469 1.031-.484 1.594-.047.437.5.453 1.016.047 1.547l-6 6.375c-.25.25-.531.375-.844.375-.313 0-.578-.125-.797-.375Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownToLineXlBoldIcon);
export default ForwardRef;
