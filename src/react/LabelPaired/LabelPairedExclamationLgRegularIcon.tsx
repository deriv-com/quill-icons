import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedExclamationLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={3}
    height={30}
    viewBox='0 0 3 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.125 7.375V19.25q-.039.585-.625.625-.585-.039-.625-.625V7.375q.039-.585.625-.625.586.039.625.625M1.5 23.938Q.64 23.859.563 23q.078-.86.937-.937.859.078.938.937-.079.859-.938.938' />
    </g>
    <defs>
      <clipPath id='965c69bb1ab44e9c79050708ee8b95f4__a'>
        <path d='M0 0h3v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExclamationLgRegularIcon);
export default ForwardRef;
