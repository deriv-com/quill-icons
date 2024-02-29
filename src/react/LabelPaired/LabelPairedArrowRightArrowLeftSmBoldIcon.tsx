import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRightArrowLeftSmBoldIcon = (
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
      <path d='M3.191 17.34.566 14.715q-.382-.465 0-.93l2.625-2.625q.465-.383.93 0 .382.465 0 .93l-1.504 1.504h9.352q.601.054.656.656-.055.602-.656.656H2.617l1.504 1.504q.382.465 0 .93-.465.382-.93 0m9.243-9.625L9.809 10.34q-.465.383-.93 0-.383-.465 0-.93l1.504-1.504H1.03Q.43 7.852.375 7.25q.054-.602.656-.656h9.352L8.879 5.09q-.383-.465 0-.93.465-.382.93 0l2.625 2.625q.383.465 0 .93' />
    </g>
    <defs>
      <clipPath id='1c88751d9827cacfac867e11685bc129__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightArrowLeftSmBoldIcon);
export default ForwardRef;
