import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const CurrencyUsdIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <path
      fill='#fff'
      d='M.03 15a16.253 16.253 0 0 0 .094 3h31.752a16.158 16.158 0 0 0 .093-3H.031ZM16 9v3h15.496a15.887 15.887 0 0 0-1.104-3H16ZM16 6h12.49a16.092 16.092 0 0 0-3.16-3H16v3ZM.797 21a15.92 15.92 0 0 0 1.343 3h27.72c.545-.943.997-1.948 1.343-3H.797ZM4.381 27a16.064 16.064 0 0 0 3.867 3h15.504a16.064 16.064 0 0 0 3.867-3H4.381Z'
    />
    <path
      fill='#F44336'
      d='M16 0v3h9.33A15.927 15.927 0 0 0 16 0ZM16 15h15.97a15.97 15.97 0 0 0-.474-3H16v3ZM16 9h14.392a16.013 16.013 0 0 0-1.901-3H16v3ZM31.876 18a15.895 15.895 0 0 1-.673 3H.797a15.901 15.901 0 0 1-.673-3h31.752ZM2.14 24a16.059 16.059 0 0 0 2.241 3h23.238a16.056 16.056 0 0 0 2.24-3H2.14ZM16 32c2.813 0 5.455-.726 7.752-2H8.248c2.297 1.274 4.94 2 7.752 2Z'
    />
    <path
      fill='#283991'
      fillRule='evenodd'
      d='M16 15H.03a16.05 16.05 0 0 1 .176-1.575l-.01.069a.078.078 0 0 0 .057-.102l-.027-.085c.04-.237.085-.472.136-.705l-.004.016.194-.143a.08.08 0 0 0-.048-.142H.422a15.887 15.887 0 0 1 1.232-3.425l.264-.19.48.344a.079.079 0 0 0 .121-.03.078.078 0 0 0 .002-.056l-.18-.563.48-.354a.08.08 0 0 0-.048-.142h-.584A16.084 16.084 0 0 1 6.655 3.01l.28.202a.079.079 0 0 0 .085.009l.006-.003.004-.003a.078.078 0 0 0 .03-.09L6.953 2.8A15.927 15.927 0 0 1 16 0v15ZM13.515.637l-.143-.422-.24.041-.129.384h-.59a.08.08 0 0 0-.03.007l-.01.005-.003.002a.08.08 0 0 0-.005.128l.48.354-.197.56a.08.08 0 0 0 .123.086l.48-.344.48.344a.078.078 0 0 0 .094.003.079.079 0 0 0 .03-.089l-.181-.563.48-.354a.08.08 0 0 0 .022-.028l.003-.007a.07.07 0 0 0 .005-.025.08.08 0 0 0-.053-.077.08.08 0 0 0-.025-.005h-.59ZM9.287 1.785a.078.078 0 0 0 .03-.089l-.067-.207-.167.08-.112.054.222.16a.078.078 0 0 0 .094.002Zm3.716 10.551.19-.563a.067.067 0 0 1 .132-.003l.19.563h.59a.08.08 0 0 1 .074.054.08.08 0 0 1-.025.088l-.48.354.18.563a.079.079 0 0 1-.123.086l-.48-.344-.48.344a.082.082 0 0 1-.013.008l-.006.002-.008.003a.081.081 0 0 1-.076-.022.089.089 0 0 1-.01-.012l-.002-.005-.003-.003-.002-.007a.08.08 0 0 1-.003-.05l.197-.56-.48-.354a.08.08 0 0 1 .005-.129l.007-.004.005-.002.004-.002.009-.002a.08.08 0 0 1 .018-.003h.59Zm-4.216-.566a.067.067 0 0 0-.131.003l-.19.563h-.59a.08.08 0 0 0-.049.142l.48.354-.197.56a.08.08 0 0 0 .01.063l.004.006.004.006a.08.08 0 0 0 .105.012l.48-.345.48.344c.011.009.023.014.036.016l.007.001h.005a.081.081 0 0 0 .046-.014.078.078 0 0 0 .03-.089l-.181-.563.48-.354a.076.076 0 0 0 .016-.016l.004-.008a.095.095 0 0 0 .009-.024.082.082 0 0 0 0-.018v-.007l-.001-.007-.002-.008a.08.08 0 0 0-.074-.054h-.59l-.19-.563Zm-4.526 0 .19.563h.59a.08.08 0 0 1 .049.142l-.48.354.18.563a.088.088 0 0 1 .003.012l.001.008v.008a.08.08 0 0 1-.033.061.079.079 0 0 1-.094-.003l-.48-.344-.48.344a.08.08 0 0 1-.125-.078l.002-.008.197-.56-.48-.354a.079.079 0 0 1-.03-.06c0-.009 0-.018.004-.028a.08.08 0 0 1 .074-.054h.592l.19-.563c.002-.08.107-.08.13-.003Zm6.795-1.488a.074.074 0 1 0-.147 0l-.19.563h-.591a.08.08 0 0 0-.048.142l.48.354-.18.563a.08.08 0 0 0 .123.086l.48-.344.48.344a.078.078 0 0 0 .123-.086l-.181-.563.48-.354a.08.08 0 0 0-.048-.142h-.59l-.191-.563Zm-4.526 0 .19.563h.59a.08.08 0 0 1 .048.142l-.48.354.181.563a.078.078 0 0 1-.123.086l-.48-.344-.48.344a.08.08 0 0 1-.123-.086l.18-.563-.48-.354a.08.08 0 0 1 .049-.142h.59l.19-.563c.02-.077.125-.077.148 0Zm-4.348.563-.19-.563c-.023-.077-.128-.077-.13 0l-.19.563h-.608a.083.083 0 0 0-.04.012.08.08 0 0 0-.008.13l.48.354-.18.563a.08.08 0 0 0 .122.086l.48-.344.48.344a.078.078 0 0 0 .123-.086l-.18-.563.48-.354a.08.08 0 0 0-.048-.142h-.59ZM13.325 8.84l.19.563h.59a.08.08 0 0 1 .049.143l-.48.353.18.563a.078.078 0 0 1-.014.076.079.079 0 0 1-.109.01l-.48-.343-.48.344a.08.08 0 0 1-.123-.087l.18-.563-.48-.353a.08.08 0 0 1 .049-.143h.59l.19-.563c.03-.066.135-.066.148 0Zm-4.347.563-.19-.563c-.014-.066-.12-.066-.148 0l-.19.563h-.59a.08.08 0 0 0-.049.143l.48.353-.18.563a.08.08 0 0 0 .123.087l.48-.344.48.344a.079.079 0 0 0 .123-.087L9.136 9.9l.48-.353a.08.08 0 0 0-.048-.143h-.59ZM4.26 8.84l.19.563h.59a.08.08 0 0 1 .049.143l-.48.353.18.563a.078.078 0 0 1-.123.087l-.48-.344-.48.344a.08.08 0 0 1-.123-.087l.18-.563-.48-.353a.08.08 0 0 1 .049-.143h.608l.19-.563c.002-.066.107-.066.13 0Zm6.795-1.486a.074.074 0 0 0-.113-.063l-.002.002-.006.004-.005.004-.005.006a.076.076 0 0 0-.016.038v.009l-.19.563h-.591a.08.08 0 0 0-.048.142l.48.354-.18.563a.079.079 0 0 0 .017.075l.006.006a.08.08 0 0 0 .1.006l.48-.345.48.344a.077.077 0 0 0 .045.018.078.078 0 0 0 .078-.104l-.181-.563.48-.354a.08.08 0 0 0 .026-.088.08.08 0 0 0-.074-.054h-.59l-.191-.563Zm-4.526 0 .19.563h.59a.08.08 0 0 1 .048.142l-.48.354.181.563.003.014a.078.078 0 0 1-.126.072l-.48-.344-.48.344a.08.08 0 0 1-.124-.047l-.002-.009v-.01a.077.077 0 0 1 .003-.02l.18-.563-.48-.354a.08.08 0 0 1 .049-.142h.59l.19-.563c.02-.077.125-.077.148 0Zm6.985-.87-.19-.562a.067.067 0 0 0-.131.003l-.19.563h-.591a.08.08 0 0 0-.077.091.08.08 0 0 0 .029.051l.48.354-.197.56a.08.08 0 0 0 .123.086l.48-.344.48.344a.078.078 0 0 0 .123-.086l-.18-.563.48-.354a.08.08 0 0 0-.048-.142h-.59Zm-4.802-.636a.073.073 0 0 1 .074.074l.19.563h.591a.08.08 0 0 1 .048.142l-.48.354.18.563a.079.079 0 0 1-.01.07l-.004.006-.004.004a.078.078 0 0 1-.105.006l-.48-.344-.48.344a.08.08 0 0 1-.123-.086l.181-.563-.48-.354a.08.08 0 0 1 .048-.142h.59l.19-.563c0-.041.034-.074.075-.074Zm-4.262.637-.19-.563c-.023-.077-.128-.077-.13 0l-.19.563h-.608a.08.08 0 0 0-.048.142l.48.354-.181.563a.08.08 0 0 0 .123.086l.48-.344.48.344a.078.078 0 0 0 .123-.086l-.18-.563.48-.354a.08.08 0 0 0-.048-.142h-.59ZM6.53 4.422l.19.564h.59a.08.08 0 0 1 .048.142l-.48.354.181.563a.078.078 0 0 1-.123.086l-.48-.344-.48.344a.08.08 0 0 1-.123-.086l.18-.563-.48-.354a.08.08 0 0 1 .049-.142h.59l.19-.564c.02-.065.125-.065.148 0Zm4.716.564-.19-.564c-.013-.065-.118-.065-.147 0l-.19.564h-.591a.08.08 0 0 0-.048.142l.48.354-.18.563a.08.08 0 0 0 .122.086l.48-.344.48.344a.078.078 0 0 0 .124-.086l-.181-.563.48-.354a.08.08 0 0 0-.048-.142h-.59ZM8.787 2.992l.19.563h.591a.079.079 0 0 1 .04.012.08.08 0 0 1 .008.13l-.48.354.18.563a.078.078 0 0 1-.123.087l-.48-.344-.48.344a.08.08 0 0 1-.124-.078l.001-.009.181-.563-.48-.353a.08.08 0 0 1 .048-.143h.59l.19-.563c.03-.066.135-.066.148 0Zm4.728.563-.19-.563c-.013-.066-.119-.066-.147 0l-.19.563h-.591a.08.08 0 0 0-.048.143l.48.353-.181.563a.09.09 0 0 0-.003.026.078.078 0 0 0 .034.06.08.08 0 0 0 .092 0l.48-.343.48.344a.078.078 0 0 0 .123-.087l-.18-.563.48-.353a.08.08 0 0 0-.048-.143h-.59Zm-2.472-2.093a.076.076 0 0 1 .013.042l.19.563h.59a.08.08 0 0 1 .075.055.08.08 0 0 1-.026.088l-.48.353.18.563a.079.079 0 0 1-.029.09.078.078 0 0 1-.094-.003l-.48-.344-.48.344a.08.08 0 0 1-.092 0 .08.08 0 0 1-.03-.087l.18-.563-.48-.353a.08.08 0 0 1 .048-.143h.59l.19-.563a.073.073 0 0 1 .135-.042Z'
      clipRule='evenodd'
    />
    <path fill='#283991' d='m4.783 4.59-.078.078-.035.035a.078.078 0 0 0 .12-.089l-.007-.023Z' />
    <path
      fill='#fff'
      d='m13.133.256.24-.041.142.422h.59a.08.08 0 0 1 .049.142l-.48.354.18.563a.079.079 0 0 1-.123.086l-.48-.344-.48.344a.08.08 0 0 1-.123-.086l.197-.56-.48-.354a.08.08 0 0 1 .048-.142h.59l.13-.384ZM8.97 1.623l.28-.134.067.207a.078.078 0 0 1-.124.086l-.222-.16ZM6.655 3.011c.099-.071.199-.141.3-.21l.104.325a.078.078 0 0 1-.123.087l-.281-.202ZM4.67 4.703l.113-.112.007.023a.078.078 0 0 1-.12.089ZM1.654 8.908c.167-.337.345-.668.535-.991h.584a.08.08 0 0 1 .048.142l-.48.354.18.563a.078.078 0 0 1-.123.086l-.48-.344-.264.19ZM.195 13.494a.078.078 0 0 0 .057-.102l-.026-.085-.03.187ZM.358 12.618c.02-.095.042-.19.064-.285h.082a.08.08 0 0 1 .048.142l-.194.143ZM13.325 11.77a.067.067 0 0 0-.131.003l-.19.563h-.591a.08.08 0 0 0-.048.142l.48.354-.197.56a.08.08 0 0 0 .123.086l.48-.344.48.344a.078.078 0 0 0 .123-.086l-.18-.563.48-.354a.08.08 0 0 0-.048-.142h-.59l-.191-.563ZM8.787 11.77a.067.067 0 0 0-.131.003l-.19.563h-.59a.08.08 0 0 0-.049.142l.48.354-.197.56a.08.08 0 0 0 .124.086l.48-.344.48.344a.079.079 0 0 0 .123-.086l-.181-.563.48-.354a.08.08 0 0 0-.048-.142h-.59l-.19-.563ZM4.451 12.333l-.19-.563c-.023-.077-.128-.077-.13.003l-.19.563h-.592a.08.08 0 0 0-.048.142l.48.354-.197.56a.08.08 0 0 0 .123.086l.48-.344.48.344a.078.078 0 0 0 .123-.086l-.18-.563.48-.354a.08.08 0 0 0-.048-.142h-.59ZM11.056 10.282a.074.074 0 1 0-.147 0l-.19.563h-.591a.08.08 0 0 0-.048.142l.48.354-.18.563a.08.08 0 0 0 .122.086l.48-.344.48.344a.078.078 0 0 0 .124-.086l-.181-.563.48-.354a.08.08 0 0 0-.048-.142h-.59l-.191-.563ZM6.72 10.845l-.19-.563c-.023-.077-.129-.077-.148 0l-.19.563h-.59a.08.08 0 0 0-.048.142l.48.354-.181.563a.08.08 0 0 0 .123.086l.48-.344.48.344a.078.078 0 0 0 .123-.086l-.18-.563.48-.354a.08.08 0 0 0-.049-.142h-.59ZM2.182 10.845l-.19-.563c-.023-.077-.128-.077-.13 0l-.19.563h-.608a.08.08 0 0 0-.048.142l.48.354-.18.563a.08.08 0 0 0 .122.086l.48-.344.48.344a.078.078 0 0 0 .123-.086l-.18-.563.48-.354a.08.08 0 0 0-.048-.142h-.59ZM13.515 9.403l-.19-.563c-.013-.066-.119-.066-.147 0l-.19.563h-.591a.08.08 0 0 0-.048.143l.48.353-.181.563a.08.08 0 0 0 .123.087l.48-.344.48.344a.078.078 0 0 0 .123-.087l-.18-.563.48-.353a.08.08 0 0 0-.048-.143h-.59ZM8.978 9.403l-.19-.563c-.014-.066-.12-.066-.148 0l-.19.563h-.59a.08.08 0 0 0-.049.143l.48.353-.18.563a.08.08 0 0 0 .123.087l.48-.344.48.344a.079.079 0 0 0 .123-.087L9.136 9.9l.48-.353a.08.08 0 0 0-.048-.143h-.59ZM4.451 9.403l-.19-.563c-.023-.066-.128-.066-.13 0l-.19.563h-.608a.08.08 0 0 0-.048.143l.48.353-.181.563a.08.08 0 0 0 .123.087l.48-.344.48.344a.078.078 0 0 0 .123-.086l-.18-.564.48-.353a.08.08 0 0 0-.048-.143h-.59ZM11.056 7.354a.074.074 0 0 0-.147 0l-.19.563h-.591a.08.08 0 0 0-.048.142l.48.354-.18.563a.08.08 0 0 0 .122.086l.48-.344.48.344a.078.078 0 0 0 .124-.086l-.181-.563.48-.354a.08.08 0 0 0-.048-.142h-.59l-.191-.563ZM6.72 7.917l-.19-.563c-.023-.077-.129-.077-.148 0l-.19.563h-.59a.08.08 0 0 0-.048.142l.48.354-.181.563a.08.08 0 0 0 .123.086l.48-.344.48.344a.078.078 0 0 0 .123-.086l-.18-.563.48-.354a.08.08 0 0 0-.049-.142h-.59ZM13.325 5.922a.067.067 0 0 0-.131.003l-.19.563h-.591a.08.08 0 0 0-.048.142l.48.354-.197.56a.08.08 0 0 0 .123.086l.48-.344.48.344a.078.078 0 0 0 .123-.086l-.18-.563.48-.354a.08.08 0 0 0-.048-.142h-.59l-.191-.563ZM8.787 5.922a.074.074 0 0 0-.147 0l-.19.563h-.59a.08.08 0 0 0-.049.142l.48.354-.18.563a.08.08 0 0 0 .123.086l.48-.344.48.344a.078.078 0 0 0 .123-.086l-.181-.563.48-.354a.08.08 0 0 0-.048-.142h-.59l-.19-.563ZM4.451 6.485l-.19-.563c-.023-.077-.128-.077-.13 0l-.19.563h-.608a.08.08 0 0 0-.048.142l.48.354-.181.563a.08.08 0 0 0 .123.086l.48-.344.48.344a.078.078 0 0 0 .123-.086l-.18-.563.48-.354a.08.08 0 0 0-.048-.142h-.59ZM6.72 4.986l-.19-.564c-.023-.065-.129-.065-.148 0l-.19.564h-.59a.08.08 0 0 0-.048.142l.48.354-.181.563a.08.08 0 0 0 .123.086l.48-.344.48.344a.078.078 0 0 0 .123-.086l-.18-.563.48-.354a.08.08 0 0 0-.049-.142h-.59ZM11.246 4.986l-.19-.564c-.013-.065-.118-.065-.147 0l-.19.564h-.591a.08.08 0 0 0-.048.142l.48.354-.18.563a.08.08 0 0 0 .122.086l.48-.344.48.344a.078.078 0 0 0 .124-.086l-.181-.563.48-.354a.08.08 0 0 0-.048-.142h-.59ZM8.978 3.555l-.19-.563c-.014-.066-.12-.066-.148 0l-.19.563h-.59a.08.08 0 0 0-.049.143l.48.353-.18.563a.08.08 0 0 0 .123.087l.48-.344.48.344a.078.078 0 0 0 .123-.087l-.181-.563.48-.353a.08.08 0 0 0-.048-.143h-.59ZM13.515 3.555l-.19-.563c-.013-.066-.119-.066-.147 0l-.19.563h-.591a.08.08 0 0 0-.048.143l.48.353-.181.563a.08.08 0 0 0 .123.087l.48-.344.48.344a.078.078 0 0 0 .123-.087l-.18-.563.48-.353a.08.08 0 0 0-.048-.143h-.59ZM11.056 1.504a.074.074 0 1 0-.147 0l-.19.563h-.591a.08.08 0 0 0-.048.143l.48.353-.18.563a.08.08 0 0 0 .122.087l.48-.344.48.344a.078.078 0 0 0 .124-.087l-.181-.563.48-.353a.08.08 0 0 0-.048-.143h-.59l-.191-.563Z'
    />
  </svg>
);
const ForwardRef = forwardRef(CurrencyUsdIcon);
export default ForwardRef;