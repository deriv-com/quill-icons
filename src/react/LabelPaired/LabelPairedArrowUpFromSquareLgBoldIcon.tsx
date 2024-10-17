import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpFromSquareLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.664 5.773 15 10.148c.39.391.39.977 0 1.329-.352.39-.937.39-1.328 0l-2.774-2.774v9.61c0 .546-.39.937-.937.937a.925.925 0 0 1-.938-.937v-9.61L6.25 11.477a.856.856 0 0 1-1.29 0c-.39-.352-.39-.938 0-1.329l4.376-4.375c.351-.351.937-.351 1.328 0m-7.851.977h.312a.95.95 0 0 1 .938.938c0 .546-.43.937-.938.937h-.312a.925.925 0 0 0-.938.938v13.125c0 .546.39.937.938.937h14.375c.507 0 .937-.39.937-.937V9.563a.95.95 0 0 0-.937-.938h-.313c-.547 0-.937-.39-.937-.937 0-.508.39-.938.937-.938h.313C18.71 6.75 20 8.04 20 9.563v13.125a2.826 2.826 0 0 1-2.812 2.812H2.813A2.8 2.8 0 0 1 0 22.688V9.563A2.826 2.826 0 0 1 2.813 6.75' />
    </g>
    <defs>
      <clipPath id='aeb8fe8fa3da246bdcdc0ea2bb72353b__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpFromSquareLgBoldIcon);
export default ForwardRef;
