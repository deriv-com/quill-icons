import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSquareCheckXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3 9c-.844 0-1.5.703-1.5 1.5v15c0 .844.656 1.5 1.5 1.5h15c.797 0 1.5-.656 1.5-1.5v-15c0-.797-.703-1.5-1.5-1.5zm-3 1.5c0-1.64 1.313-3 3-3h15c1.64 0 3 1.36 3 3v15c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3zm15.516 5.063-6 6c-.282.28-.797.28-1.078 0l-3-3c-.282-.282-.282-.797 0-1.079.28-.28.796-.28 1.078 0L9 19.97l5.438-5.485c.28-.28.796-.28 1.078 0 .28.282.28.797 0 1.079' />
    </g>
    <defs>
      <clipPath id='f077a4756075becd117ba4fe86cc4b3d__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSquareCheckXlRegularIcon);
export default ForwardRef;
