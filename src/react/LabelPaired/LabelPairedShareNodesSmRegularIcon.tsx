import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedShareNodesSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12.625 6.813c0 1.23-.984 2.187-2.187 2.187a2.19 2.19 0 0 1-1.614-.684l-4.129 2.079a1.6 1.6 0 0 1 .055.355c0 .137-.027.273-.055.383l4.13 2.05c.41-.41.984-.683 1.613-.683 1.203 0 2.187.984 2.187 2.188 0 1.23-.984 2.187-2.187 2.187a2.16 2.16 0 0 1-2.188-2.187c0-.247.027-.52.11-.739l-3.965-1.996a2.2 2.2 0 0 1-1.832.985A2.16 2.16 0 0 1 .374 10.75c0-1.203.957-2.187 2.188-2.187.765 0 1.421.41 1.832 1.011l3.964-1.996a2.4 2.4 0 0 1-.109-.766c0-1.203.957-2.187 2.188-2.187 1.203 0 2.187.984 2.187 2.188m-10.062 5.25c.464 0 .874-.247 1.12-.657.247-.383.247-.902 0-1.312-.245-.383-.656-.656-1.12-.656-.493 0-.903.273-1.149.656-.246.41-.246.93 0 1.312.246.41.656.656 1.149.656m9.187-5.25c0-.465-.273-.875-.656-1.122-.41-.246-.93-.246-1.313 0-.41.247-.656.657-.656 1.122 0 .492.246.902.656 1.148.383.246.903.246 1.313 0 .383-.246.656-.656.656-1.149M10.438 16c.464 0 .874-.246 1.12-.656.247-.383.247-.903 0-1.313-.245-.383-.656-.656-1.12-.656-.493 0-.903.273-1.149.656-.246.41-.246.93 0 1.313.246.41.656.656 1.149.656' />
    </g>
    <defs>
      <clipPath id='6d6534e6f7b78a9eb2c2e5d2b32d10a0__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedShareNodesSmRegularIcon);
export default ForwardRef;
