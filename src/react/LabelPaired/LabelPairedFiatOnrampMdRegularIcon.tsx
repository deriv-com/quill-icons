import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFiatOnrampMdRegularIcon = (
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
      <path d='M14 5c-1.094.031-2.094.594-2.625 1.531-.531.907-.531 2.063 0 3 .563.906 1.531 1.5 2.625 1.5a3.05 3.05 0 0 0 2.594-1.5 3.08 3.08 0 0 0 0-3.031A3.05 3.05 0 0 0 14 5m3 5.656A3.97 3.97 0 0 1 14 12c-1.437 0-2.719-.75-3.406-1.875l-2.5 2.5A3.97 3.97 0 0 1 10 16a3.9 3.9 0 0 1-1.375 3H15.5a1.5 1.5 0 0 0 1.5-1.5zM6 19a2.992 2.992 0 0 0 1.094-5.781h-.032A2.9 2.9 0 0 0 6 13a3 3 0 0 0 0 6m1.125-6.812 3.031-3.032C10.031 8.781 10 8.406 10 8c0-2.187 1.781-4 4-4 2.188 0 4 1.813 4 4v9.5c0 1.406-1.125 2.5-2.5 2.5H6c-2.219 0-4-1.781-4-4 0-2.187 1.781-4 4-4q.563 0 1.125.188M5 7.5c0-.25.219-.5.5-.5h3a.47.47 0 0 1 .438.313c.093.187.03.406-.094.562l-3 3a.53.53 0 0 1-.719 0 .53.53 0 0 1 0-.719L7.281 8H5.5a.494.494 0 0 1-.5-.5m1.406 6v.375c.532.156.875.656.875 1.219v.125H6.47v-.125c0-.25-.219-.469-.5-.469a.48.48 0 0 0-.469.469c0 .281.219.5.469.5a1.32 1.32 0 0 1 1.312 1.312c0 .563-.343 1.063-.875 1.219v.375h-.843v-.375c-.532-.156-.875-.656-.875-1.219v-.125H5.5v.125c0 .25.219.469.469.469.281 0 .5-.219.5-.469 0-.281-.219-.5-.5-.5-.719 0-1.282-.593-1.282-1.312 0-.563.344-1.063.875-1.219V13.5zM13.5 5.656v.688h.656v-.688h.656v.688c.25 0 .5.093.657.25.406.375.437 1 .062 1.406a.97.97 0 0 1 .281.688c0 .562-.468 1-1 1v.656h-.656v-.656H13.5v.656h-.687v-.656h-.657V9h.656V7h-.656v-.656h.656v-.688zm1.313 2.688H13.5V9h1.313a.347.347 0 0 0 .343-.344c0-.156-.156-.312-.344-.312m0-1.344H13.5v.688h1.313a.347.347 0 0 0 .343-.344.347.347 0 0 0-.344-.344' />
    </g>
    <defs>
      <clipPath id='5c3de88ce5e99f4eb743d063e0da9705__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFiatOnrampMdRegularIcon);
export default ForwardRef;
