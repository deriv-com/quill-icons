import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileInvoiceDollarCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={18}
    viewBox='0 0 9 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.875 14V7.25H6a.73.73 0 0 1-.54-.21.73.73 0 0 1-.21-.54V4.625H1.5q-.352.023-.375.375v9q.023.352.375.375h6q.352-.023.375-.375M0 5q.024-.632.445-1.055Q.868 3.524 1.5 3.5h3.89q.61 0 1.055.445l2.11 2.11Q9 6.5 9 7.133V14a1.52 1.52 0 0 1-.445 1.055q-.422.421-1.055.445h-6a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 0 14zm4.5 3.563q.422.023.469.468v.235q.258.023.492.093.399.141.351.563-.14.398-.585.351a4 4 0 0 0-.727-.117q-.305 0-.54.117-.14.095-.116.141 0 .024.094.07.234.118.656.211l.023.024h.024q.42.093.867.304.21.118.398.352.165.21.188.563-.048.726-.61 1.007a1.5 1.5 0 0 1-.515.188v.234q-.048.422-.469.469-.421-.047-.469-.469v-.258a6 6 0 0 1-.61-.164q-.022 0-.046-.023-.047 0-.07-.024h-.07q-.4-.164-.305-.585.164-.4.586-.329.046.024.117.047h.047q.446.165.843.188.33 0 .516-.094.141-.093.117-.164.024-.024-.117-.117a4 4 0 0 0-.656-.235h-.047a3.3 3.3 0 0 1-.82-.304 1.4 1.4 0 0 1-.422-.328q-.164-.212-.188-.563 0-.375.188-.61.187-.257.445-.374.234-.117.492-.164V9.03q.048-.445.469-.469M2.25 5.75h1.875q.352.023.375.375-.023.352-.375.375H2.25q-.352-.023-.375-.375.023-.352.375-.375m0 1.5h1.875q.352.023.375.375-.023.352-.375.375H2.25q-.352-.023-.375-.375.023-.352.375-.375' />
    </g>
    <defs>
      <clipPath id='0988a08900b9bf4f1d9a08a13e080403__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileInvoiceDollarCaptionBoldIcon);
export default ForwardRef;
