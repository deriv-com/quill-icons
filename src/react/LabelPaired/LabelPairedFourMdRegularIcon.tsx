import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFourMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.438 5.719 1.313 14H9V8.5q.031-.469.5-.5.47.031.5.5V14h1.5q.47.031.5.5-.03.47-.5.5H10v3.5q-.03.47-.5.5-.469-.03-.5-.5V15H.5a.51.51 0 0 1-.437-.219.53.53 0 0 1 0-.5l4.5-9q.218-.405.656-.218.405.25.218.656' />
    </g>
    <defs>
      <clipPath id='5d21ff2335b8dd136b8e6ab8423dd137__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFourMdRegularIcon);
export default ForwardRef;
