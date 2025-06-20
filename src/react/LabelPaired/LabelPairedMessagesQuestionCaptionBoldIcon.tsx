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
      <path d='M1.688 4.625a.555.555 0 0 0-.563.563v4.125c0 .328.234.562.563.562h1.125a.57.57 0 0 1 .562.563v.468l1.36-.937a.8.8 0 0 1 .327-.094h3a.555.555 0 0 0 .563-.562V5.187a.57.57 0 0 0-.562-.562zM0 5.188C0 4.273.75 3.5 1.688 3.5h6.375c.914 0 1.687.773 1.687 1.688v4.125C9.75 10.25 8.977 11 8.063 11H5.227l-2.11 1.406c-.187.117-.398.14-.586.047a.59.59 0 0 1-.281-.515V11h-.562A1.68 1.68 0 0 1 0 9.313zm6 6.562h1.125v.563c0 .328.234.562.563.562h2.25c.093 0 .21.047.304.094l1.383.937v-.469c0-.304.234-.562.563-.562h1.124a.555.555 0 0 0 .563-.562V8.186a.57.57 0 0 0-.562-.562H10.5V6.5h2.813c.914 0 1.687.773 1.687 1.688v4.124C15 13.25 14.227 14 13.313 14h-.563v.938a.61.61 0 0 1-.305.515c-.187.094-.398.07-.586-.047L9.75 14H7.688A1.68 1.68 0 0 1 6 12.313zM3.445 5.773a.93.93 0 0 1 .868-.609h.96c.563 0 1.032.445 1.032 1.031 0 .352-.211.703-.516.867l-.539.329c0 .21-.187.375-.375.375A.37.37 0 0 1 4.5 7.39V7.18c0-.14.07-.258.188-.328l.726-.422a.26.26 0 0 0 .14-.235.27.27 0 0 0-.28-.28h-.961a.16.16 0 0 0-.141.093l-.024.023c-.07.188-.28.305-.468.235a.393.393 0 0 1-.235-.493m.89 3.07a.46.46 0 0 1 .259-.468.46.46 0 0 1 .539 0c.164.094.281.281.258.469a.51.51 0 0 1-.258.492.46.46 0 0 1-.54 0 .47.47 0 0 1-.257-.492' />
    </g>
    <defs>
      <clipPath id='dd490b7def8df491bd514da95d233abb__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMessagesQuestionCaptionBoldIcon);
export default ForwardRef;
