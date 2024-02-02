import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMessagesQuestionCaptionBoldIcon = (
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
      <path d='M1.688 4.625q-.516.047-.563.563v4.125q.047.514.563.562h1.125q.514.047.562.563v.445l1.383-.914a.54.54 0 0 1 .305-.094h3q.514-.047.562-.562V5.187q-.047-.514-.562-.562zM0 5.188q.024-.727.492-1.196.469-.468 1.196-.492h6.375q.726.024 1.195.492.468.469.492 1.196v4.125q-.024.726-.492 1.195-.47.468-1.195.492H5.227l-2.11 1.406a.56.56 0 0 1-.562.024.59.59 0 0 1-.305-.492V11h-.562q-.727-.024-1.196-.492-.468-.47-.492-1.195zm6 6.562h1.125v.563q.047.514.563.562h2.25q.163 0 .304.094l1.383.914v-.445q.047-.516.563-.563h1.124q.516-.047.563-.562V8.186q-.047-.514-.562-.562H10.5V6.5h2.813q.726.024 1.195.492.468.469.492 1.196v4.124q-.024.727-.492 1.196-.47.468-1.195.492h-.563v.938a.59.59 0 0 1-.305.492.56.56 0 0 1-.562-.024L9.773 14H7.688q-.727-.024-1.196-.492-.468-.47-.492-1.195zm-2.531-6q.234-.562.844-.61h.984q.422.024.726.305.282.305.282.727 0 .585-.516.89l-.539.305v.024q-.023.327-.375.375-.352-.048-.375-.375v-.235q0-.21.188-.328l.726-.422a.24.24 0 0 0 .14-.234q-.022-.258-.257-.281h-.984a.21.21 0 0 0-.141.117v.023q-.165.305-.492.211-.305-.14-.211-.469zm.867 3.094q0-.305.258-.492a.52.52 0 0 1 .562 0q.258.188.258.492a.58.58 0 0 1-.258.492.52.52 0 0 1-.562 0 .58.58 0 0 1-.258-.492' />
    </g>
    <defs>
      <clipPath id='d3504b49ec0c6f3e__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMessagesQuestionCaptionBoldIcon);
export default ForwardRef;
