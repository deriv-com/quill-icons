import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWifiMdFillIcon = (
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
      <path d='M1.688 10.344c-.407.406-1.032.375-1.438-.031-.375-.376-.344-1.032.031-1.407C2.813 6.5 6.22 5 10 5c3.75 0 7.156 1.5 9.688 3.906.375.375.406 1.031.03 1.406-.405.407-1.03.438-1.437.032C16.125 8.28 13.22 7 10 7c-3.25 0-6.156 1.281-8.312 3.344M10 12c-1.781 0-3.406.688-4.656 1.75a.99.99 0 0 1-1.407-.062c-.343-.438-.312-1.063.094-1.438C5.625 10.875 7.72 10 10 10s4.344.875 5.938 2.25c.406.375.468 1 .093 1.438a.99.99 0 0 1-1.406.062C13.375 12.688 11.75 12 10 12m2 5c0 .719-.406 1.375-1 1.75-.625.344-1.406.344-2 0A2.03 2.03 0 0 1 8 17a2.02 2.02 0 0 1 1-1.719c.594-.344 1.375-.344 2 0 .594.375 1 1.031 1 1.719' />
    </g>
    <defs>
      <clipPath id='d4e66e533a05dde4af7d1fd03d25b10b__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWifiMdFillIcon);
export default ForwardRef;
