import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import tw from "tailwind-react-native-classnames";
import { useRouter } from 'expo-router';

export default function EmergencyServicesScreen() {
  const router = useRouter();
  
  const navigateTo = (path) => {
    router.push(path);
  };

  return (
    <ScrollView style={tw`flex-1`}>
      <View style={tw`bg-purple-800 p-6 pb-12`}>
        <View style={tw`flex-row items-center mt-10`}>
          <TouchableOpacity onPress={() => router.back()}>
            <FontAwesome5 name="arrow-left" size={24} color="white" />
          </TouchableOpacity>
          <Text style={[tw`text-white text-2xl ml-4`, { fontFamily: 'outfit-bold' }]}>HakiAI Services</Text>
        </View>
      </View>

      <View style={[tw`bg-white -mt-7 px-2`, { borderRadius: 30 }]}>
        {/* <View style={tw`mt-4 p-6`}>
          <Text style={[tw`text-black text-lg`, { fontFamily: 'outfit-bold' }]}>Quick Access to Emergency Services</Text>
          <Text style={[tw`text-gray-600 mt-2`, { fontFamily: 'outfit' }]}>
            Select an option below to quickly access emergency contacts and services.
          </Text>
        </View> */}

<View style={tw`mt-2`}>
          <View style={tw`flex-row flex-wrap justify-between`}>
            <TouchableOpacity style={tw`w-1/2`} onPress={() => navigateTo('ReportCorruptPolice/page')}>
              <Card icon="user-shield" title="Report a corrupt police" description=" " />
            </TouchableOpacity>
            <TouchableOpacity style={tw`w-1/2`} onPress={() => navigateTo('ReportPoliceBrutality/page')}>
              <Card icon="user-shield" title="Report a police brutality" description=" " />
            </TouchableOpacity>
            <TouchableOpacity style={tw`w-1/2`} onPress={() => navigateTo('governmentProjects/page')}>
              <Card icon="building" title="Government projects around you" description="exp " />
            </TouchableOpacity>
            <TouchableOpacity style={tw`w-1/2`} onPress={() => navigateTo('community')}>
              <Card icon="comments" title="Community forum" description="Discover what's cooking" />
            </TouchableOpacity>
            <TouchableOpacity style={tw`w-1/2`} onPress={() => navigateTo('recallGovernor/page')}>
              <Card icon="user-times" title="Recall your governor" description="Join 20,000 members to recall DR.Susan" />
            </TouchableOpacity>
            <TouchableOpacity style={tw`w-1/2`} onPress={() => navigateTo('leaderPerformance/page')}>
              <Card icon="chart-line" title="How your leaders are performing" description="Join 20,000 members to recall DR.Susan" />
            </TouchableOpacity>
            <TouchableOpacity style={tw`w-1/2`} onPress={() => navigateTo('budgetTracking/page')}>
              <Card icon="money-check-alt" title="Track Budget & Expenditure" description="Monitor government spending" />
            </TouchableOpacity>
            <TouchableOpacity style={tw`w-1/2`} onPress={() => navigateTo('report-incident/page')}>
              <Card icon="exclamation-triangle" title="Report Fraud" description="Report fraudulent activities" />
            </TouchableOpacity>
            <TouchableOpacity style={tw`w-1/2`} onPress={() => navigateTo('publicPetitions/page')}>
              <Card icon="file-signature" title="Public Petitions" description="Start or sign petitions" />
            </TouchableOpacity>
            <TouchableOpacity style={tw`w-1/2`} onPress={() => navigateTo('localMeetings/page')}>
              <Card icon="users" title="Local Meetings" description="Join local community meetings" />
            </TouchableOpacity>
            <TouchableOpacity style={tw`w-1/2`} onPress={() => navigateTo('reportlostID/page')}>
              <Card icon="id-card" title="Recover lost ID" description="Recover lost ID" />
            </TouchableOpacity>
            {/* <TouchableOpacity style={tw`w-1/2`} onPress={() => navigateTo('educationQuality')}>
              <Card icon="school" title="Monitor Education Quality" description="Track the quality of local schools" />
            </TouchableOpacity> */}
            {/* <TouchableOpacity style={tw`w-1/2`} onPress={() => navigateTo('healthcareServices')}>
              <Card icon="hospital" title="Healthcare Services" description="Monitor local healthcare services" />
            </TouchableOpacity> */}
            {/* <TouchableOpacity style={tw`w-1/2`} onPress={() => navigateTo('whistleblower')}>
              <Card icon="bullhorn" title="Whistleblower Protection" description="Report without fear" />
            </TouchableOpacity> */}
            <TouchableOpacity style={tw`w-1/2`} onPress={() => navigateTo('legalAid')}>
              <Card icon="balance-scale" title="Legal Aid" description="Get legal assistance" />
            </TouchableOpacity>
            {/* <TouchableOpacity style={tw`w-1/2`} onPress={() => navigateTo('publicTransport')}>
              <Card icon="bus" title="Public Transport Issues" description="Report issues with public transport" />
            </TouchableOpacity> */}
            {/* <TouchableOpacity style={tw`w-1/2`} onPress={() => navigateTo('waterQuality')}>
              <Card icon="tint" title="Water Quality" description="Monitor and report water quality" />
            </TouchableOpacity> */}
            {/* <TouchableOpacity style={tw`w-1/2`} onPress={() => navigateTo('roadConditions')}>
              <Card icon="road" title="Road Conditions" description="Report poor road conditions" />
            </TouchableOpacity> */}
          </View>
        </View>    
      </View>
    </ScrollView>
  );
}

function Card({ icon, title, description }) {
  return (
    <View style={tw`w-40 bg-white p-4 m-2 rounded-xl shadow-md`}>
      <View style={tw`items-center`}>
        <FontAwesome5 name={icon} size={32} color="#6b21a8" />
        <Text style={[tw`text-purple-600 font-bold mt-2 text-center`, { fontFamily: 'outfit-bold' }]}>{title}</Text>
        <Text style={[tw`text-gray-600 text-center mt-1`, { fontFamily: 'outfit' }]}>{description}</Text>
      </View>
    </View>
  );
}

