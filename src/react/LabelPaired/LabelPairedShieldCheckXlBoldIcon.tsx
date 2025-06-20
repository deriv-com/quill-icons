import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedShieldCheckXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.422 11.953c-.281.14-.422.375-.422.61 0 4.312 1.781 11.671 8.719 15 .14.093.375.093.515 0 6.938-3.282 8.72-10.688 8.766-15 0-.235-.187-.47-.422-.61L12 8.343zm18-2.062c1.031.468 1.828 1.453 1.828 2.672-.047 4.687-1.969 13.171-10.031 17.062a2.88 2.88 0 0 1-2.485 0C2.672 25.735.75 17.25.75 12.563c-.047-1.22.75-2.204 1.781-2.672l8.813-3.75a1.5 1.5 0 0 1 1.265 0zm-6.797 5.859c0 1.078-.656 1.969-1.5 2.39v3.235A1.11 1.11 0 0 1 12 22.5c-.656 0-1.125-.469-1.125-1.125v-3.234a2.61 2.61 0 0 1-1.5-2.391c0-1.406 1.172-2.625 2.625-2.625 1.406 0 2.625 1.219 2.625 2.625' />
    </g>
    <defs>
      <clipPath id='42b98e4459dfc4ea51955ad3552d06d3__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedShieldCheckXlBoldIcon);
export default ForwardRef;
