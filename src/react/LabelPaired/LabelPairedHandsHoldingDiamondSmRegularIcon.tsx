import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHandsHoldingDiamondSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m9.602 4.023 2.625 2.625a.843.843 0 0 1 0 1.23l-2.625 2.626a.843.843 0 0 1-1.23 0L5.745 7.879a.843.843 0 0 1 0-1.23l2.625-2.626a.843.843 0 0 1 1.23 0M6.375 7.25 9 9.875l2.625-2.625L9 4.625zM2 5.5c.957 0 1.75.793 1.75 1.75v3.418c0 .11 0 .246.027.355.055-.082.11-.164.192-.246a1.52 1.52 0 0 1 2.16 0l2.488 2.489c.137.164.274.3.383.464.082-.164.219-.3.355-.464l2.489-2.489a1.52 1.52 0 0 1 2.16 0c.082.082.137.164.191.246.028-.109.055-.246.055-.355V7.25c0-.957.766-1.75 1.75-1.75.957 0 1.75.793 1.75 1.75v5.934a3.1 3.1 0 0 1-.902 2.16L14.55 17.64a.463.463 0 0 1-.63 0 .463.463 0 0 1 0-.63l2.298-2.296c.41-.41.656-.957.656-1.531V7.25A.9.9 0 0 0 16 6.375a.88.88 0 0 0-.875.875v3.418c0 .738-.3 1.45-.82 1.969l-.301.3-1.203 1.204-.438.437a.463.463 0 0 1-.629 0 .463.463 0 0 1 0-.629l.438-.437 1.203-1.203a.644.644 0 0 0 0-.903.644.644 0 0 0-.902 0l-2.489 2.489c-.355.355-.546.82-.546 1.312v2.105A.45.45 0 0 1 9 17.75a.43.43 0 0 1-.437-.437v-2.106c0-.492-.22-.957-.547-1.312L5.5 11.406a.644.644 0 0 0-.902 0 .644.644 0 0 0 0 .903L5.8 13.512l.437.437a.463.463 0 0 1 0 .63.463.463 0 0 1-.629 0l-.437-.438-1.203-1.203-.274-.301c-.547-.52-.82-1.23-.82-1.969V7.25A.9.9 0 0 0 2 6.375a.88.88 0 0 0-.875.875v5.934c0 .574.219 1.12.629 1.53l2.297 2.298a.463.463 0 0 1 0 .629.463.463 0 0 1-.63 0l-2.296-2.297a3.06 3.06 0 0 1-.875-2.16V7.25c0-.957.766-1.75 1.75-1.75' />
    </g>
    <defs>
      <clipPath id='2f294681d175fee564971e3b4ad13e37__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHandsHoldingDiamondSmRegularIcon);
export default ForwardRef;
