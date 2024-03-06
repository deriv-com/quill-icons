import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLightbulbCaptionRegularIcon = (
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
      <path d='M7.266 9.547q.585-.82.609-1.922-.047-1.43-.984-2.39Q5.93 4.295 4.5 4.25q-1.43.047-2.39.984-.939.961-.985 2.391.024 1.101.61 1.922.093.14.21.305l.094.14q.023.024.023.047.47.609.868 1.29.305.585.398 1.171h-.773a2.4 2.4 0 0 0-.282-.797 10 10 0 0 0-.796-1.219l-.375-.515Q.398 8.96.375 7.625q.047-1.758 1.219-2.906Q2.742 3.546 4.5 3.5q1.758.047 2.906 1.219Q8.58 5.867 8.625 7.625q-.024 1.336-.727 2.344-.188.258-.375.492v.023q-.445.587-.796 1.196-.212.398-.282.82h-.75q.07-.585.375-1.172.399-.703.867-1.336h.024q.164-.235.305-.445M4.5 5.75q-.797.023-1.336.54-.515.538-.539 1.335-.023.352-.375.375-.352-.023-.375-.375.024-1.125.773-1.852Q3.375 5.023 4.5 5q.352.023.375.375-.023.352-.375.375M3.445 14q.282.703 1.055.75.774-.047 1.055-.75zm-.82-.375v-.117q.024-.234.258-.258h3.234q.234.024.258.258v.117q-.023.797-.54 1.336-.538.515-1.335.539-.797-.023-1.336-.54-.515-.538-.539-1.335' />
    </g>
    <defs>
      <clipPath id='408d8e96c51932767699aa70944ec405__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLightbulbCaptionRegularIcon);
export default ForwardRef;
