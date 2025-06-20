import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTrashMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.531 5a.49.49 0 0 0-.406.25l-.5.75h4.719l-.5-.75A.49.49 0 0 0 8.438 5zM10.5 6h3c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-.594l-.781 11.156c-.094 1.063-.937 1.844-2 1.844H3.844a2.007 2.007 0 0 1-2-1.844L1.062 7H.5a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5h2.969l.812-1.281A1.47 1.47 0 0 1 5.531 4h2.907c.5 0 1 .281 1.28.719zm1.406 1H2.063l.78 11.094c.032.5.47.906 1 .906h6.282c.531 0 .969-.406 1-.906z' />
    </g>
    <defs>
      <clipPath id='c0a13fe6951f4430df2ddc61fde32539__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTrashMdRegularIcon);
export default ForwardRef;
