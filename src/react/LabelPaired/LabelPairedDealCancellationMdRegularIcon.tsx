import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDealCancellationMdRegularIcon = (
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
      <path d='M2.813 7.813H5.78c.532 0 1 .093 1.438.28.437.157.812.438 1.125.782s.531.781.719 1.313A6.4 6.4 0 0 1 9.313 12c0 .719-.094 1.313-.25 1.844-.188.531-.407.969-.72 1.312a3.2 3.2 0 0 1-1.124.781 3.6 3.6 0 0 1-1.438.282H2.813zM5.78 15c.625 0 1.125-.187 1.5-.594.375-.375.563-.969.563-1.719v-1.343c0-.75-.188-1.344-.563-1.719-.375-.406-.875-.594-1.5-.594H4.156V15zm8.344 1.344c-1.094 0-1.937-.375-2.562-1.094-.626-.75-.938-1.812-.938-3.25 0-.687.063-1.312.25-1.844.156-.531.375-1 .688-1.344.312-.374.656-.656 1.093-.843a3.7 3.7 0 0 1 1.469-.282c.75 0 1.344.157 1.844.47s.875.812 1.156 1.437l-1.156.625a1.92 1.92 0 0 0-.656-.969c-.313-.219-.688-.344-1.188-.344-.625 0-1.156.219-1.5.656-.375.438-.562 1.032-.562 1.813v1.281c0 .781.187 1.375.562 1.813.344.437.875.656 1.5.656.5 0 .938-.125 1.25-.375s.531-.594.688-1l1.093.656C16.875 15 16.5 15.5 16 15.844c-.531.344-1.125.5-1.875.5' />
    </g>
    <defs>
      <clipPath id='ed0f55f396fafe7e4bd71ffda2fed0e7__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDealCancellationMdRegularIcon);
export default ForwardRef;
