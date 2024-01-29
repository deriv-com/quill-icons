import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRedditCaptionIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.734 10.672q-.538-.07-.586-.586.048-.54.586-.586.516.047.563.586-.047.516-.563.586M11.813 9.5q-.024 1.617-.797 2.93a5.8 5.8 0 0 1-2.086 2.086q-1.313.772-2.93.797-1.617-.024-2.93-.797A5.8 5.8 0 0 1 .984 12.43Q.212 11.117.188 9.5.21 7.883.984 6.57A5.8 5.8 0 0 1 3.07 4.484Q4.383 3.712 6 3.688q1.617.022 2.93.796a5.8 5.8 0 0 1 2.086 2.086q.772 1.313.797 2.93m-3.094-.96a.72.72 0 0 0-.563.233q-.82-.562-2.015-.632l.398-1.828 1.313.28q.046.54.562.587.54-.048.586-.586-.047-.54-.586-.586a.6.6 0 0 0-.516.328l-1.43-.328q-.116 0-.163.117l-.446 2.016q-1.194.07-2.015.632a.72.72 0 0 0-.563-.234q-.609.047-.75.586-.117.54.422.89-.047.165-.047.352.047.96.914 1.57.867.633 2.18.657 1.313-.024 2.203-.656.867-.61.914-1.57 0-.188-.047-.376.516-.328.399-.867-.141-.54-.75-.586m-1.617 2.718q-.375.328-1.102.328-.726-.024-1.102-.328-.094-.07-.187 0-.094.117 0 .21.468.4 1.289.4.82 0 1.29-.4.093-.093 0-.21-.095-.07-.188 0M7.289 9.5q-.54.047-.586.586.047.516.586.586.516-.07.563-.586-.048-.54-.563-.586' />
    </g>
    <defs>
      <clipPath id='7d9ca786f40d444b6a090d6a14e27b96__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRedditCaptionIcon);
export default ForwardRef;
