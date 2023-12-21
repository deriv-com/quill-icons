import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedHarmonyOsXlIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 30 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M7.875 6h14.203A4.921 4.921 0 0 1 27 10.922v14.203C27 27.844 24.797 30 22.078 30H7.875A4.842 4.842 0 0 1 3 25.125V10.922C3 8.203 5.156 6 7.875 6m.938 5.531v5.39H9.89v-2.296h2.343v2.297h1.032v-5.39h-1.032v2.109H9.891v-2.11zm7.312 0v5.39h1.031V14.25l-.093-.89h.093l1.407 2.39h.609l1.453-2.39h.047l-.047.89v2.672h1.031v-5.39h-1.031l-1.734 2.812h-.047l-1.688-2.813zm2.11 13.032c.234.046.468.093.703.093.234 0 .468-.047.703-.093.234-.094.422-.188.609-.329.188-.14.328-.28.469-.468.093-.235.187-.47.187-.75 0-.235-.047-.422-.14-.61a1.248 1.248 0 0 0-.282-.468c-.14-.141-.328-.235-.515-.329a7.642 7.642 0 0 0-.61-.28l-.328-.095c-.328-.093-.562-.234-.75-.328-.14-.093-.187-.234-.187-.422 0-.14.047-.28.234-.375.14-.14.328-.187.563-.187.234 0 .422.094.562.187.14.141.235.282.281.422l.985-.375c-.047-.14-.14-.234-.235-.375-.047-.14-.187-.281-.328-.375a1.07 1.07 0 0 0-.562-.281c-.188-.094-.422-.094-.703-.094-.282 0-.563 0-.75.094a2.53 2.53 0 0 0-.61.328c-.14.14-.281.281-.375.469a1.298 1.298 0 0 0 0 1.172c.094.14.188.281.328.422.094.093.235.234.422.28.14.095.282.188.469.235l.328.094c.235.094.375.14.516.234.14.047.281.094.375.188.047.047.14.14.187.234 0 .047.047.14.047.235 0 .14-.047.234-.094.28-.047.095-.093.142-.187.235-.094.047-.14.094-.281.094-.094.047-.188.047-.328.047a.954.954 0 0 1-.704-.281 1.026 1.026 0 0 1-.375-.657l-1.03.375c.093.235.187.47.327.657.14.187.282.328.469.468.188.141.422.235.61.328m-7.172.093c.374 0 .75-.093 1.078-.234.328-.14.609-.328.89-.61.235-.234.422-.562.563-.89.14-.328.187-.703.187-1.078 0-.422-.047-.797-.187-1.125-.14-.328-.328-.657-.563-.89-.281-.235-.562-.47-.89-.61-.328-.14-.703-.188-1.078-.188-.376 0-.75.047-1.079.188-.375.14-.656.375-.89.61-.235.233-.422.562-.563.89-.14.328-.234.703-.234 1.125 0 .375.094.75.234 1.078.14.328.328.656.563.89.234.282.515.47.89.61.329.14.704.234 1.079.234m0-.984a1.88 1.88 0 0 1-.704-.14c-.187-.095-.375-.188-.562-.376a1.685 1.685 0 0 1-.375-.562 2.19 2.19 0 0 1 0-1.547c.094-.188.234-.422.375-.563.187-.14.375-.28.562-.375a1.88 1.88 0 0 1 .704-.14c.234 0 .468.047.656.14.234.094.422.235.562.375.188.141.281.375.375.563a2.188 2.188 0 0 1 0 1.547c-.094.234-.187.422-.375.562-.14.188-.328.282-.562.375-.188.094-.422.14-.656.14m-2.016 1.453v.937h3.937v-.937z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHarmonyOsXlIcon);
export default ForwardRef;