import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedInfoCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={5}
    height={18}
    viewBox='0 0 5 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.563 5.188c0-.329.164-.633.468-.797a.95.95 0 0 1 .938 0 .94.94 0 0 1 .469.797.95.95 0 0 1-.47.82.95.95 0 0 1-.937 0c-.304-.164-.469-.469-.469-.82m-.938 3c0-.305.234-.563.563-.563H2.5a.57.57 0 0 1 .563.563v6.187h1.124a.57.57 0 0 1 .563.563.555.555 0 0 1-.562.562H.813a.54.54 0 0 1-.563-.562c0-.305.234-.563.563-.563h1.125V8.75h-.75a.54.54 0 0 1-.563-.562' />
    </g>
    <defs>
      <clipPath id='2754d61ccb762bea540fd964f520f0b3__a'>
        <path d='M0 0h5v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedInfoCaptionBoldIcon);
export default ForwardRef;
