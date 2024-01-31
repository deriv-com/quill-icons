import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDollarSignCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={18}
    viewBox='0 0 8 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.375 3.875v1.148q1.149.118 1.969.329.327.117.281.468-.117.33-.469.258-.585-.141-1.36-.258a7.3 7.3 0 0 0-1.546-.07q-.75.07-1.242.375-.445.282-.61.938-.07.515.07.796.165.282.516.54.82.445 2.11.726l.047.023q.609.141 1.195.329.61.21 1.078.492.516.304.797.844.257.538.117 1.265-.281 1.196-1.453 1.64a5 5 0 0 1-1.5.259v1.148q-.023.352-.375.375-.328-.023-.375-.375v-1.172q-.211 0-.445-.047-.47-.07-1.102-.234a7.4 7.4 0 0 1-1.219-.399q-.304-.164-.21-.492.187-.304.492-.21.562.233 1.125.398.585.141 1.03.21 1.384.188 2.298-.163.867-.352 1.008-1.078.07-.516-.07-.797-.142-.304-.516-.54-.82-.444-2.11-.75H3.86q-.586-.14-1.195-.351-.586-.188-1.078-.492a1.95 1.95 0 0 1-.774-.82q-.28-.563-.14-1.266.21-.984.937-1.43A3.6 3.6 0 0 1 3.18 5h.446V3.875Q3.648 3.523 4 3.5q.352.023.375.375' />
    </g>
    <defs>
      <clipPath id='590599f0806b2a1b__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDollarSignCaptionRegularIcon);
export default ForwardRef;
