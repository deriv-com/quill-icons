import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyAvatar24pxTest2Icon = (
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
      fillRule='evenodd'
      d='M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12m-2.244-9.472.84 2.472h1.056L8.724 8.624H7.44L4.512 17h1.02l.84-2.472zM8.028 9.56h.06l1.416 4.08H6.612zm8.456-.936H13.04V17h3.804q.468 0 .864-.18.396-.192.684-.516t.444-.768a2.7 2.7 0 0 0 .168-.96q0-.516-.18-.876a1.8 1.8 0 0 0-.42-.6 1.6 1.6 0 0 0-.54-.348 1.6 1.6 0 0 0-.504-.12v-.072a2.3 2.3 0 0 0 .444-.132q.24-.108.444-.312.204-.216.336-.54t.132-.792q0-.984-.6-1.572-.588-.588-1.632-.588m.048 7.488h-2.484v-3h2.484q.648 0 1.02.336.372.324.372.96v.408q0 .636-.372.972-.372.324-1.02.324m-.168-3.864h-2.316V9.512h2.316q.6 0 .936.3t.336.864v.408q0 .564-.336.864t-.936.3'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(LegacyAvatar24pxTest2Icon);
export default ForwardRef;
