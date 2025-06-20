import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHuaweiAppGalleryMdIcon = (
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
      <path d='m9.188 12.563-.282.718-.031.063h.656L9.5 13.28zM14.25 4A3.76 3.76 0 0 1 18 7.75v8.531C18 18.344 16.313 20 14.25 20H5.719A3.71 3.71 0 0 1 2 16.281V7.75C2 5.688 3.656 4 5.719 4zm-2.719 8-.469 1.5-.468-1.5h-.438l.719 2.188h.375l.469-1.438.469 1.438h.343l.75-2.188h-.437l-.469 1.5-.469-1.5zm-2.5 0-.937 2.188h.437l.188-.407v-.031h.969l.187.438h.438l-.907-2.157V12zm6.656 0v2.188h.438V12zm-12 0v2.188h.438v-.876h.938v.876H5.5V12h-.437v.906h-.938V12zm3.782 0v1.25c0 .375-.188.563-.469.563-.312 0-.5-.188-.5-.563v-1.219h-.406v1.219c0 .625.312.969.875.969.593 0 .906-.344.906-.969V12zm6.156 0v2.187h1.563v-.406H14.03v-.531h.781v-.406h-.78v-.438h1.124V12zM7.063 6.563c0 1.53 1.28 2.75 2.843 2.75s2.844-1.22 2.844-2.75h-.406c0 1.312-1.094 2.343-2.438 2.343S7.47 7.875 7.47 6.562z' />
    </g>
    <defs>
      <clipPath id='82dcf833a48726392d1acec008d9edba__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHuaweiAppGalleryMdIcon);
export default ForwardRef;
