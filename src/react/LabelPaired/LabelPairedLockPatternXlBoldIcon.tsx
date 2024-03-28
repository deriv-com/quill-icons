import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLockPatternXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.375 9c0-1.406 1.172-2.625 2.625-2.625 1.031 0 1.922.656 2.344 1.5h4.265c.422-.844 1.313-1.5 2.391-1.5 1.031 0 1.922.656 2.344 1.5h4.265c.422-.844 1.313-1.5 2.391-1.5 1.406 0 2.625 1.219 2.625 2.625 0 1.453-1.219 2.625-2.625 2.625a2.7 2.7 0 0 1-.89-.14l-5.672 5.671c.093.282.187.563.187.844 0 1.453-1.219 2.625-2.625 2.625a2.7 2.7 0 0 1-.89-.14l-5.438 5.39h3.937c.422-.844 1.313-1.5 2.391-1.5 1.031 0 1.922.656 2.344 1.5h4.265c.422-.844 1.313-1.5 2.391-1.5 1.406 0 2.625 1.219 2.625 2.625 0 1.453-1.219 2.625-2.625 2.625a2.61 2.61 0 0 1-2.39-1.5h-4.266a2.6 2.6 0 0 1-2.344 1.5 2.61 2.61 0 0 1-2.39-1.5H8.343A2.6 2.6 0 0 1 6 29.625 2.62 2.62 0 0 1 3.375 27c0-1.406 1.172-2.625 2.625-2.625.281 0 .563.094.844.188l5.672-5.672a2.7 2.7 0 0 1-.141-.891c0-1.406 1.172-2.625 2.625-2.625.281 0 .563.094.844.188l5.437-5.438h-3.937a2.6 2.6 0 0 1-2.344 1.5 2.61 2.61 0 0 1-2.39-1.5H8.343A2.6 2.6 0 0 1 6 11.625 2.62 2.62 0 0 1 3.375 9m0 9c0 .984.469 1.828 1.313 2.297.796.469 1.78.469 2.625 0A2.64 2.64 0 0 0 8.625 18c0-.937-.516-1.781-1.312-2.25-.844-.469-1.829-.469-2.625 0-.844.469-1.313 1.313-1.313 2.25m18 0c0 .984.469 1.828 1.313 2.297.796.469 1.78.469 2.625 0A2.64 2.64 0 0 0 26.625 18c0-.937-.516-1.781-1.312-2.25-.844-.469-1.829-.469-2.625 0-.844.469-1.313 1.313-1.313 2.25' />
    </g>
    <defs>
      <clipPath id='62a0e2fd3c5ec37fdbd81f80bd4a7fe5__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLockPatternXlBoldIcon);
export default ForwardRef;