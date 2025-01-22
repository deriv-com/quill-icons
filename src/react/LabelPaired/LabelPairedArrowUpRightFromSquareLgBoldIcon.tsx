import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpRightFromSquareLgBoldIcon = (
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
      <path d='M11.875 6.438c0-.508.39-.938.938-.938h6.21c.547 0 .938.43.938.938v6.25c0 .546-.39.937-.938.937a.925.925 0 0 1-.937-.937V8.703l-8.711 8.711a.856.856 0 0 1-1.29 0c-.39-.352-.39-.937 0-1.328l8.712-8.711h-3.985c-.546 0-.937-.39-.937-.937m-9.062.312h5a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937h-5a.925.925 0 0 0-.938.938v13.125c0 .546.39.937.938.937h13.125c.507 0 .937-.39.937-.937v-5c0-.508.39-.938.938-.938a.95.95 0 0 1 .937.938v5a2.826 2.826 0 0 1-2.812 2.812H2.813A2.8 2.8 0 0 1 0 22.688V9.563A2.826 2.826 0 0 1 2.813 6.75' />
    </g>
    <defs>
      <clipPath id='285bb71d8fe4b4fc3acd2aae48734a9d__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightFromSquareLgBoldIcon);
export default ForwardRef;
