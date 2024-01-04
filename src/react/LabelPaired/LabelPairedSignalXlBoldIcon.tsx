import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedSignalXlBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M27 6c.688.063 1.063.438 1.125 1.125v21.75c-.063.688-.438 1.063-1.125 1.125-.688-.063-1.063-.438-1.125-1.125V7.125C25.938 6.437 26.313 6.062 27 6Zm-6 4.5c.688.063 1.063.438 1.125 1.125v17.25c-.063.688-.438 1.063-1.125 1.125-.688-.063-1.063-.438-1.125-1.125v-17.25c.063-.688.438-1.063 1.125-1.125ZM15 15c.688.063 1.063.438 1.125 1.125v12.75c-.063.688-.438 1.063-1.125 1.125-.688-.063-1.063-.438-1.125-1.125v-12.75c.063-.688.438-1.063 1.125-1.125Zm-6 4.5c.688.063 1.063.438 1.125 1.125v8.25C10.062 29.563 9.687 29.938 9 30c-.688-.063-1.063-.438-1.125-1.125v-8.25c.063-.688.438-1.063 1.125-1.125ZM3 24c.688.063 1.063.438 1.125 1.125v3.75C4.062 29.563 3.687 29.938 3 30c-.688-.063-1.063-.438-1.125-1.125v-3.75C1.938 24.437 2.313 24.062 3 24Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSignalXlBoldIcon);
export default ForwardRef;
