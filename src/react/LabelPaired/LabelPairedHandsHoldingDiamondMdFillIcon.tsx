import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHandsHoldingDiamondMdFillIcon = (
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
      <path d='M9.281 4.313a.964.964 0 0 1 1.406 0l3 3a.964.964 0 0 1 0 1.406l-3 3a.964.964 0 0 1-1.406 0l-3-3a.964.964 0 0 1 0-1.406zM2.5 7.25v5.031c0 .531.188 1.031.563 1.406l1.593 1.594c.282.25.688.313.969.094.406-.25.469-.844.125-1.187l-.469-.47-1-1a.964.964 0 0 1 0-1.405.964.964 0 0 1 1.407 0l1 1 .468.468.813.781A3.55 3.55 0 0 1 9 16.063V18.5A1.5 1.5 0 0 1 7.5 20H5.406A1.96 1.96 0 0 1 4 19.438L.875 16.313A3.03 3.03 0 0 1 0 14.188V7.25C0 6.563.531 6 1.25 6c.688 0 1.25.563 1.25 1.25m15 0c0-.687.563-1.25 1.25-1.25S20 6.563 20 7.25v6.938a3.03 3.03 0 0 1-.875 2.124L16 19.438c-.375.375-.906.563-1.437.563H12.5a1.48 1.48 0 0 1-1.5-1.5v-2.437c0-.938.344-1.844 1-2.5l.813-.782.468-.469 1-1a.964.964 0 0 1 1.406 0 .964.964 0 0 1 0 1.407l-1 1-.468.469c-.344.343-.281.937.125 1.187.281.219.687.156.969-.094l1.593-1.594c.375-.374.594-.874.594-1.406V7.25' />
    </g>
    <defs>
      <clipPath id='4f996bb350249ce9e050b24dfe45d831__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHandsHoldingDiamondMdFillIcon);
export default ForwardRef;
