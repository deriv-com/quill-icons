import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedNineLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.125 13q.039 1.875 1.29 3.086 1.21 1.25 3.085 1.289 1.953-.04 3.203-1.406l.195-.235q.977-1.21.977-2.734-.039-1.875-1.29-3.086-1.21-1.25-3.085-1.289-1.875.039-3.086 1.29-1.25 1.21-1.289 3.085m4.922 6.21q-.274.04-.547.04-2.655-.078-4.414-1.836T.25 13q.078-2.656 1.836-4.414T6.5 6.75q2.656.078 4.414 1.836T12.75 13q-.04 2.5-1.64 4.219l-5.43 6.68q-.626.624-1.328.156-.626-.626-.157-1.328z' />
    </g>
    <defs>
      <clipPath id='7341e0fd5dd1961c6f98754f9e057709__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedNineLgBoldIcon);
export default ForwardRef;
