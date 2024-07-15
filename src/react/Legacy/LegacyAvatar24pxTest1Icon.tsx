import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyAvatar24pxTest1Icon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#FF444F'
      d='M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12'
    />
    <path
      fill='#fff'
      d='m10.596 17-.84-2.472H6.372L5.532 17h-1.02L7.44 8.624h1.284L11.652 17zM8.088 9.56h-.06l-1.416 4.08h2.892zM13.04 8.624h3.444q1.044 0 1.632.588.6.588.6 1.572 0 .468-.132.792t-.336.54q-.204.204-.444.312a2.3 2.3 0 0 1-.444.132v.072q.228.012.504.12.288.108.54.348.252.228.42.6.18.36.18.876t-.168.96a2.3 2.3 0 0 1-.444.768q-.288.324-.684.516-.396.18-.864.18H13.04zm1.008 7.488h2.484q.648 0 1.02-.324.372-.336.372-.972v-.408q0-.636-.372-.96-.372-.336-1.02-.336h-2.484zm0-3.864h2.316q.6 0 .936-.3t.336-.864v-.408q0-.564-.336-.864t-.936-.3h-2.316z'
    />
  </svg>
);
const ForwardRef = forwardRef(LegacyAvatar24pxTest1Icon);
export default ForwardRef;
