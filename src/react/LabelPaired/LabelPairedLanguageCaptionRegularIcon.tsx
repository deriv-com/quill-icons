import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLanguageCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.125 5.75H1.5a.73.73 0 0 0-.54.21.73.73 0 0 0-.21.54v6q0 .328.21.54.212.21.54.21h5.625zm.75 0v7.5H13.5a.73.73 0 0 0 .54-.21.73.73 0 0 0 .21-.54v-6a.73.73 0 0 0-.21-.54.73.73 0 0 0-.54-.21zM15 6.5v6a1.52 1.52 0 0 1-.445 1.055q-.422.421-1.055.445h-12a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 0 12.5v-6q.024-.632.445-1.055Q.868 5.024 1.5 5h12q.633.024 1.055.445.421.423.445 1.055m-10.898.984 1.5 3.75q.093.329-.211.493-.329.093-.493-.211L4.688 11H2.813l-.211.516q-.165.304-.493.21-.305-.163-.21-.492l1.5-3.75q.117-.234.351-.234t.352.234M3.75 8.633l-.656 1.617h1.312zm7.875-1.008V8h1.5q.352.023.375.375-.023.352-.375.375h-.117l-.094.281a4.8 4.8 0 0 1-1.031 1.617l.234.141.445.258q.282.21.141.515-.21.282-.515.141l-.446-.281a2.7 2.7 0 0 1-.445-.281q-.281.21-.61.375l-.398.187q-.328.117-.492-.164-.141-.328.164-.492l.398-.211a5 5 0 0 0 .375-.211l-.492-.492q-.21-.258 0-.516.258-.234.516 0l.539.516.023.023a3.9 3.9 0 0 0 .89-1.383V8.75H9.376Q9.023 8.727 9 8.375q.023-.352.375-.375h1.5v-.375q.023-.352.375-.375.352.023.375.375' />
    </g>
    <defs>
      <clipPath id='06baa724a5e724ae9e56fc28acd54dc8__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLanguageCaptionRegularIcon);
export default ForwardRef;
