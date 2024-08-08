import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedIpadosCaptionIcon = (
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
      <path d='M10.055 7.016c0-.328-.164-.54-.422-.54s-.422.188-.422.54c0 .351.164.562.422.562s.422-.21.422-.562m-3.446-.61c0 .258-.164.399-.445.399h-.422v-.82h.422c.281 0 .445.14.445.421M5.602 9.125c.89 0 1.43.68 1.43 1.758 0 1.055-.54 1.734-1.43 1.734-.891 0-1.454-.68-1.454-1.734 0-1.078.563-1.758 1.454-1.758m2.203-2.016c-.211.024-.305.094-.305.235 0 .164.117.234.281.234.235 0 .422-.14.422-.351v-.141zm5.437-1.992c.235.586.258 1.266.258 1.688v5.414c0 .422-.023 1.101-.258 1.687a2.4 2.4 0 0 1-.75 1.008 3.2 3.2 0 0 1-.844.445c-.398.118-.867.141-1.453.141H4.781c-.586 0-1.054-.023-1.453-.14a3.2 3.2 0 0 1-.844-.446 2.4 2.4 0 0 1-.75-1.008C1.5 13.32 1.5 12.641 1.5 12.22V6.805c0-.422 0-1.102.234-1.688.118-.304.375-.726.75-1.008a2.6 2.6 0 0 1 .844-.445c.399-.117.867-.164 1.453-.164h5.414c.586 0 1.055.047 1.453.164.352.094.61.258.844.445.375.282.633.704.75 1.008M9.54 6.195c-.398 0-.656.328-.656.82 0 .516.258.82.656.82a.56.56 0 0 0 .516-.28h.023v.258h.281V5.608h-.304v.868h-.024a.57.57 0 0 0-.492-.282m-4.125-.492v2.11h.328v-.727h.492c.399 0 .704-.281.704-.68 0-.422-.282-.703-.704-.703zm-.656.234c.07.024.14-.023.187-.093.047-.047.047-.14 0-.211a.21.21 0 0 0-.187-.094c-.07 0-.14.024-.188.094s-.047.164 0 .21c.047.071.117.118.188.095m.164.282h-.328v1.593h.328zm.68 6.914c1.218 0 1.992-.867 1.992-2.25S6.82 8.609 5.602 8.609c-1.243 0-2.016.891-2.016 2.274s.773 2.25 2.016 2.25m1.57-5.766c0 .281.234.469.539.469.21 0 .375-.094.469-.258h.023v.234h.305V6.735c0-.351-.211-.539-.633-.539-.352 0-.61.164-.633.446h.305c.023-.118.14-.188.328-.188.21 0 .328.094.328.281v.141l-.445.023c-.375.024-.586.188-.586.47m2.46 5.766c.962 0 1.595-.516 1.595-1.313 0-.633-.352-.984-1.266-1.195l-.469-.094c-.61-.14-.844-.375-.844-.703 0-.445.422-.726.961-.726.586 0 .961.304 1.008.773h.54c-.024-.727-.657-1.266-1.524-1.266-.914 0-1.547.516-1.547 1.243 0 .609.398 1.007 1.266 1.195l.468.117c.61.117.844.375.844.727 0 .422-.422.75-1.008.75-.633 0-1.054-.282-1.125-.75h-.539c.047.75.68 1.242 1.64 1.242' />
    </g>
    <defs>
      <clipPath id='67f1e70c53eed4c65ff66654ce24b128__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedIpadosCaptionIcon);
export default ForwardRef;
