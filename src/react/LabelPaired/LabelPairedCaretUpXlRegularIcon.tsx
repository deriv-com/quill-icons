import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCaretUpXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m7.219 13.594-5.625 5.344a.32.32 0 0 0-.094.234q.046.281.328.328h11.344a.366.366 0 0 0 .328-.328.32.32 0 0 0-.094-.235l-5.625-5.343A.5.5 0 0 0 7.5 13.5a.5.5 0 0 0-.281.094m-1.032-1.078A1.88 1.88 0 0 1 7.5 12q.75 0 1.313.516l5.624 5.343q.563.516.563 1.313t-.516 1.312Q13.97 21 13.172 21H1.828q-.797 0-1.312-.516Q0 19.97 0 19.172q0-.797.563-1.36z' />
    </g>
    <defs>
      <clipPath id='d58153dfb78ab15f32158e7803a82730__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCaretUpXlRegularIcon);
export default ForwardRef;
