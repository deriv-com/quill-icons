import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCashRegisterXlRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M12.75 7.5h-9c-.469.031-.719.281-.75.75v1.5c.031.469.281.719.75.75h9c.469-.031.719-.281.75-.75v-1.5c-.031-.469-.281-.719-.75-.75m-9-1.5h9c.625.031 1.156.25 1.594.656.406.438.625.969.656 1.594v1.5a2.446 2.446 0 0 1-.656 1.594A2.446 2.446 0 0 1 12.75 12H9v1.5h10.875c.781 0 1.438.25 1.969.75.562.469.906 1.078 1.031 1.828l1.078 7.735c.031.125.047.265.047.421V27c-.031.844-.328 1.547-.89 2.11-.563.562-1.266.859-2.11.89H3c-.844-.031-1.547-.328-2.11-.89C.329 28.546.032 27.843 0 27v-3c0-.062.016-.125.047-.187l1.078-7.735c.125-.75.469-1.36 1.031-1.828.531-.5 1.188-.75 1.969-.75H7.5V12H3.75a2.446 2.446 0 0 1-1.594-.656A2.447 2.447 0 0 1 1.5 9.75v-1.5c.031-.625.25-1.156.656-1.594A2.446 2.446 0 0 1 3.75 6M1.5 27c0 .438.14.797.422 1.078.281.281.64.422 1.078.422h18c.438 0 .797-.14 1.078-.422.281-.281.422-.64.422-1.078v-1.5h-21zm19.875-10.687c-.156-.813-.64-1.25-1.453-1.313H4.125c-.844.063-1.344.5-1.5 1.313L1.5 24h21zm-16.125.562c.688.063 1.063.438 1.125 1.125-.062.688-.437 1.063-1.125 1.125-.687-.062-1.062-.437-1.125-1.125.063-.687.438-1.062 1.125-1.125M8.625 18c.063-.687.438-1.062 1.125-1.125.688.063 1.063.438 1.125 1.125-.062.688-.437 1.063-1.125 1.125-.687-.062-1.062-.437-1.125-1.125M7.5 20.625c.688.063 1.063.438 1.125 1.125-.062.688-.437 1.063-1.125 1.125-.687-.062-1.062-.437-1.125-1.125.063-.687.438-1.062 1.125-1.125M13.125 18c.063-.687.438-1.062 1.125-1.125.688.063 1.063.438 1.125 1.125-.062.688-.437 1.063-1.125 1.125-.687-.062-1.062-.437-1.125-1.125M12 20.625c.688.063 1.063.438 1.125 1.125-.062.688-.437 1.063-1.125 1.125-.687-.062-1.062-.437-1.125-1.125.063-.687.438-1.062 1.125-1.125M17.625 18c.063-.687.438-1.062 1.125-1.125.688.063 1.063.438 1.125 1.125-.062.688-.437 1.063-1.125 1.125-.687-.062-1.062-.437-1.125-1.125M16.5 20.625c.688.063 1.063.438 1.125 1.125-.062.688-.437 1.063-1.125 1.125-.687-.062-1.062-.437-1.125-1.125.063-.687.438-1.062 1.125-1.125'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCashRegisterXlRegularIcon);
export default ForwardRef;