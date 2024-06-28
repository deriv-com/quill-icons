import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCaretDownXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m7.734 22.406 5.625-5.297c.094-.093.094-.14.094-.234 0-.187-.14-.375-.328-.375H1.828c-.187 0-.328.188-.328.375 0 .094 0 .14.094.234l5.625 5.297c.047.094.14.094.281.094.094 0 .188 0 .234-.094m1.032 1.125C8.438 23.86 7.969 24 7.5 24c-.516 0-.984-.14-1.312-.469L.563 18.188C.188 17.859 0 17.344 0 16.875 0 15.844.797 15 1.828 15l11.297.047c1.031 0 1.875.797 1.875 1.828 0 .469-.234.984-.61 1.313z' />
    </g>
    <defs>
      <clipPath id='bfb482c5d7f20c4d63a4fc15acb16f3a__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCaretDownXlRegularIcon);
export default ForwardRef;
