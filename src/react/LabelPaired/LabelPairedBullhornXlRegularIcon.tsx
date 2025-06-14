import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBullhornXlRegularIcon = (
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
      <path d='M19.5 8.11a.383.383 0 0 0-.656-.282L17.719 9c-1.969 2.063-4.5 3.516-7.219 4.125v8.297c2.719.61 5.25 2.015 7.219 4.125l1.125 1.172c.234.234.656.047.656-.282zM9 21.187v-7.829c-.281.047-.562.047-.844.094L6.75 13.5H3c-.844 0-1.5.703-1.5 1.5v4.5c0 .844.656 1.5 1.5 1.5h3.75l1.406.094c.281 0 .563.047.844.093m8.766-14.391C18.89 5.578 21 6.375 21 8.109v18.329c0 1.687-2.11 2.53-3.234 1.312l-1.125-1.172c-2.063-2.156-4.735-3.515-7.641-3.89v4.687A2.62 2.62 0 0 1 6.375 30h-.75A2.62 2.62 0 0 1 3 27.375V22.5c-1.687 0-3-1.312-3-3V15c0-1.64 1.313-3 3-3h3.703l1.36-.047A12.72 12.72 0 0 0 16.64 7.97zM4.5 22.5v4.875c0 .656.469 1.125 1.125 1.125h.75A1.11 1.11 0 0 0 7.5 27.375v-4.828l-.797-.047zM23.25 15c.375 0 .75.375.75.75v3c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75v-3c0-.375.328-.75.75-.75' />
    </g>
    <defs>
      <clipPath id='4036839466ab866fa4cb4b4f88c4f2f6__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBullhornXlRegularIcon);
export default ForwardRef;
