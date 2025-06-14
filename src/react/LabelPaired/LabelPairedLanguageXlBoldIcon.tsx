import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLanguageXlBoldIcon = (
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
      <path d='M3 9h24c1.64 0 3 1.36 3 3v12c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3V12c0-1.64 1.313-3 3-3m24 2.25H15v13.5h12c.375 0 .75-.328.75-.75V12c0-.375-.375-.75-.75-.75m-18.656 3a.98.98 0 0 0-.844-.562c-.375 0-.75.234-.89.562l-3 6.75c-.188.469 0 1.031.468 1.266.516.187 1.031 0 1.266-.47l.422-.983h3.422l.421.984c.235.469.797.656 1.266.469.469-.235.656-.797.469-1.266zm.047 4.688H6.609l.891-1.97zm12.984-5.25a.94.94 0 0 1 .938.937v.188h2.812a.94.94 0 0 1 .938.937.94.94 0 0 1-.938.938h-.094l-.093.234c-.422 1.125-1.079 2.203-1.875 3.047.046.047.093.047.14.093l.89.516c.423.281.563.844.329 1.313a1.02 1.02 0 0 1-1.313.328l-.89-.563c-.188-.093-.375-.234-.61-.375a8.7 8.7 0 0 1-1.593.89l-.141.095c-.469.187-1.031 0-1.266-.47-.187-.515 0-1.03.47-1.265l.187-.047c.28-.14.609-.328.89-.468l-.61-.563a1.06 1.06 0 0 1 0-1.36 1.06 1.06 0 0 1 1.36 0l.657.704h.046a8.3 8.3 0 0 0 1.407-2.11H18a.94.94 0 0 1-.937-.937.94.94 0 0 1 .937-.937h2.438v-.188a.94.94 0 0 1 .937-.937' />
    </g>
    <defs>
      <clipPath id='1cba2bd6f141b459809f72d34d91e6e0__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLanguageXlBoldIcon);
export default ForwardRef;
