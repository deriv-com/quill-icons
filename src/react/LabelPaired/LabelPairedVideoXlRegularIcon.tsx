import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedVideoXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3 10.5c-.844 0-1.5.703-1.5 1.5v12c0 .844.656 1.5 1.5 1.5h12c.797 0 1.5-.656 1.5-1.5V12c0-.797-.703-1.5-1.5-1.5zM0 12c0-1.64 1.313-3 3-3h12c1.64 0 3 1.36 3 3v12c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3zm24.328 13.313L19.5 22.64v-1.735L25.031 24c.047 0 .094.047.14.047a.32.32 0 0 0 .329-.328v-11.39a.32.32 0 0 0-.328-.329c-.047 0-.094.047-.14.047L19.5 15.14v-1.735l4.828-2.672c.281-.14.563-.234.844-.234.984 0 1.828.844 1.828 1.828v11.39c0 .985-.844 1.782-1.828 1.782a1.84 1.84 0 0 1-.844-.187' />
    </g>
    <defs>
      <clipPath id='f5ed3c88577465f867eac31d48312cd9__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedVideoXlRegularIcon);
export default ForwardRef;
