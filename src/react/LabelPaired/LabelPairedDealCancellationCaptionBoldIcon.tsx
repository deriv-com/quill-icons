import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDealCancellationCaptionBoldIcon = (
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
      <path d='M1.898 6.36h2.368q.633 0 1.125.21c.351.117.632.328.89.586.235.258.422.586.54.985.14.398.21.843.21 1.359 0 .54-.07.984-.21 1.383a2.5 2.5 0 0 1-.54.984c-.258.258-.539.445-.89.586q-.492.21-1.125.211H1.898zm2.368 5.085c.398 0 .726-.117.96-.351.235-.235.352-.586.352-1.102v-.96c0-.516-.117-.868-.351-1.102-.235-.235-.563-.352-.961-.352H3.258v3.867zm6.445 1.313c-.422 0-.82-.07-1.149-.188a2.3 2.3 0 0 1-.867-.61 2.5 2.5 0 0 1-.562-1.007q-.21-.597-.211-1.406c0-.516.07-.985.21-1.383q.177-.632.563-1.055c.235-.28.516-.492.867-.632.329-.141.727-.211 1.149-.211.586 0 1.055.117 1.43.351q.597.353.914 1.125l-1.172.61c-.094-.258-.211-.47-.399-.633-.164-.164-.421-.235-.773-.235-.399 0-.727.118-.961.399-.258.258-.375.633-.375 1.125v1.008c0 .492.117.867.375 1.148.234.258.563.375.96.375.33 0 .61-.094.798-.258.21-.187.351-.422.445-.68l1.125.657c-.234.469-.539.844-.937 1.125-.375.258-.844.375-1.43.375' />
    </g>
    <defs>
      <clipPath id='09cf57dc5bca51706bdfb9f7b6f50849__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDealCancellationCaptionBoldIcon);
export default ForwardRef;
