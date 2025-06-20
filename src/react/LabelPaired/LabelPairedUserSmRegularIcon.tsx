import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUserSmRegularIcon = (
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
      <path d='M9.125 7.25c0-.93-.52-1.777-1.312-2.27a2.65 2.65 0 0 0-2.625 0c-.82.493-1.313 1.34-1.313 2.27a2.65 2.65 0 0 0 1.313 2.297 2.65 2.65 0 0 0 2.625 0c.792-.492 1.312-1.34 1.312-2.297M3 7.25c0-1.23.656-2.379 1.75-3.008a3.48 3.48 0 0 1 3.5 0C9.316 4.872 10 6.02 10 7.25a3.54 3.54 0 0 1-1.75 3.035 3.48 3.48 0 0 1-3.5 0A3.48 3.48 0 0 1 3 7.25m-1.75 9.625h10.5c-.055-2.16-1.832-3.937-4.02-3.937H5.242a4.004 4.004 0 0 0-3.992 3.937m-.875.082c0-2.707 2.16-4.895 4.867-4.895H7.73a4.89 4.89 0 0 1 4.895 4.895c0 .438-.383.793-.82.793H1.168a.794.794 0 0 1-.793-.793' />
    </g>
    <defs>
      <clipPath id='80fd955555c840540d3401b313162632__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUserSmRegularIcon);
export default ForwardRef;
