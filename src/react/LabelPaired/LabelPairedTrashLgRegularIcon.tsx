import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTrashLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.164 6.75a.61.61 0 0 0-.508.313L6.031 8h5.899l-.625-.937a.61.61 0 0 0-.508-.313zM13.375 8h3.75c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-.742l-.977 13.945c-.117 1.328-1.172 2.305-2.5 2.305H5.055a2.51 2.51 0 0 1-2.5-2.305L1.578 9.25H.875a.617.617 0 0 1-.625-.625C.25 8.313.523 8 .875 8h3.711l1.016-1.602A1.84 1.84 0 0 1 7.164 5.5h3.633c.625 0 1.25.352 1.601.898zm1.758 1.25H2.828l.977 13.867c.039.625.586 1.133 1.25 1.133h7.851c.664 0 1.211-.508 1.25-1.133z' />
    </g>
    <defs>
      <clipPath id='95aeaf53cbc39a9baa35534b48dca63a__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTrashLgRegularIcon);
export default ForwardRef;
